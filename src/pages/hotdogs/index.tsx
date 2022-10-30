import { DogSummaryCard } from "@components/DogSummaryCard/DogSummaryCard";
import { HtmlHead } from "@components/HtmlHead/HtmlHead";
import { Loading } from "@components/Loading/Loading";
import { MainContent } from "@components/MainContent/MainContent";
import { IFetchHotdogsPageResult, query } from "@core/graphql/operations/FetchHotdogsPage";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

// TODO: globalsettings wireup
// TODO: fix webpack caching issue
// TODO: fix detail page routing issue

export default function Index({
    content: mainCopy,
    dogs,
    loading,
    page
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (loading) return <Loading />;

    return (
        <>
            <HtmlHead pageTitle={page.title} meta={page.seo} />
            <Container sx={{ marginTop: 5 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={12} sm={12}>
                        <Item>
                            <MainContent title={mainCopy?.title}>
                                {mainCopy && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: `<${mainCopy?.tag}>${mainCopy.content}</${mainCopy.tag}>`
                                        }}
                                    />
                                )}
                            </MainContent>
                        </Item>
                    </Grid>
                    {dogs.map((i: any) => {
                        const uid = i.system.uid;
                        return (
                            <React.Fragment key={uid}>
                                <Grid xs={4} sm={4} key={`g-${uid}`}>
                                    <Item key={`i-${uid}`}>
                                        <DogSummaryCard dog={i} key={`d-${uid}`} />
                                    </Item>
                                </Grid>
                                <Grid xs={4} sm={4} key={`g-${uid}-2`}>
                                    <Item key={`i-${uid}-2`}>
                                        <DogSummaryCard dog={i} key={`d-${uid}-2`} />
                                    </Item>
                                </Grid>
                            </React.Fragment>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<IFetchHotdogsPageResult> = async () => {
    const { content, dogs, loading, page } = await query();
    return {
        props: {
            content,
            dogs,
            loading,
            page
        }
    };
};
