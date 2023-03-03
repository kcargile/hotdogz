import DogSummaryCard from "@components/dog/DogSummaryCard";
import HtmlHead from "@components/html/HtmlHead";
import MainContent from "@components/layout/MainContent";
import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { ContentStackClient } from "@core/cs/ContentStackClient";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import { PAGE_FALLBACK_TITLE } from "@theme/Constants";
import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react";

// TODO: fix breakpoint issues in grid

// TODO: 1. Fix global settings query
// TODO: 2. Fix main content render settings query
// TODO: 4. Prune manual GQL shit

interface IndexProps {
    page: any;
    settings?: GlobalSettings;
}

export default function Index({ page, settings }: IndexProps) {
    const context = useContext(GlobalSettingsContext);
    const dogs = page.featured_content;
    const main = page.main_content;

    console.log("settings");
    console.log(settings);

    useEffect(() => {
        if (context.updateSettings) {
            context.updateSettings(settings);
        }
    }, [context, settings]);

    return (
        <>
            <HtmlHead title={page.title || PAGE_FALLBACK_TITLE} meta={page.global_field || undefined} />
            <Container sx={{ marginTop: 5 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={12} sm={12}>
                        <Item>
                            <MainContent title={page.title || PAGE_FALLBACK_TITLE}>
                                {/* console.log(page.main_content[0].main_copy.item); */}
                                {/* {mainContent && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: `<${mainContent.mainCopy?.tag}>${mainCopy.content}</${mainCopy.tag}>`
                                        }}
                                    />
                                )} */}
                            </MainContent>
                        </Item>
                    </Grid>
                    {dogs &&
                        dogs.map((i: any) => {
                            const uid = i.uid;
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

// export const getServerSideProps: GetServerSideProps<IndexProps> = async (context) => {
//     const { data } = await new GraphQLClient().Client.query<FetchPageQuery, FetchPageQueryVariables>({
//         query: FetchPageDocument,
//         variables: { url: context.resolvedUrl }
//     });

//     const settings: AllGlobalSettings | undefined = data?.all_global_settings || undefined;
//     return {
//         props: {
//             settings: GraphQLClient.fromGqlSettings(settings?.items?.[0] as GlobalSettings),
//             page: data?.all_page?.items?.[0] || undefined
//         }
//     };
// };

export const getServerSideProps: GetServerSideProps<IndexProps> = async (context) => {
    const cs = new ContentStackClient().Client;
    const query = cs.ContentType("page").Query();
    const result = await query
        .where("url", context.resolvedUrl)
        .includeReference(["featured_content", "main_content"])
        .includeCount()
        .toJSON()
        .find();

    if (result[0] && result[0].length !== 1) {
        // there should only be one homepage
        throw new Error("Doggonnit, some kat jacked up this page. Sick em!! 🐕");
    }

    const page = result[0][0];
    const settings = page.global_field; // TODO: this is the wrong settings object

    // console.log("result");
    // console.log(page);
    // console.log(settings);

    return {
        props: {
            settings,
            page
        }
    };
};
