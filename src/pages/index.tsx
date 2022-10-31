import DogSummaryCard from "@components/DogSummaryCard";
import HtmlHead from "@components/HtmlHead";
import InjectGlobalSettingsContext from "@components/InjectGlobalSettingsContext";
import Loading from "@components/Loading";
import MainContent from "@components/MainContent";
import { IFetchHotdogsPageResult, query } from "@core/graphql/operations/FetchHomePage/FetchHomePage";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

export default function Index({
    content: mainCopy,
    dogs,
    loading,
    page,
    settings
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (loading) return <Loading loading />;
    return (
        <>
            <HtmlHead pageTitle="Home" meta={page.seo} />
            <InjectGlobalSettingsContext {...settings} />
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
                    {dogs &&
                        dogs.map((i: any) => {
                            const uid = i.system.uid;
                            return (
                                <React.Fragment key={uid}>
                                    <Grid xs={4} sm={4} key={`g-${uid}`}>
                                        <Item key={`i-${uid}`}>
                                            <DogSummaryCard dog={i} key={`d-${uid}`} />
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

export const getServerSideProps: GetServerSideProps<Partial<IFetchHotdogsPageResult>> = async (context) => {
    const { content, dogs, loading, page, settings } = await query(context.resolvedUrl);
    return {
        props: {
            content,
            dogs,
            loading,
            page,
            settings
        }
    };
};
