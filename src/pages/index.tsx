import DogSummaryCard from "@components/dog/DogSummaryCard";
import HtmlHead from "@components/html/HtmlHead";
import MainContent from "@components/layout/MainContent";
import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { GraphQLClient } from "@core/graphql/GraphQLClient";
import {
    AllGlobalSettings,
    Dog,
    FetchPageDocument,
    FetchPageQuery,
    FetchPageQueryVariables,
    Page
} from "@core/graphql/__generated__/graphql";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import { PAGE_FALLBACK_TITLE } from "@theme/Constants";
import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react";

// TODO: fix breakpoint issues in grid

interface IIndexProps {
    page?: Page;
    settings?: GlobalSettings;
}

export default function Index({ page, settings }: IIndexProps) {
    const context = useContext(GlobalSettingsContext);
    const dogEdges = page?.featured_contentConnection?.edges || [];
    const dogs = dogEdges.flatMap((e) => {
        if (!e?.node || e?.node.__typename !== "Dog") return [];
        return e.node as Dog;
    });

    useEffect(() => {
        if (context.updateSettings) {
            context.updateSettings(settings);
        }
    }, [context, settings]);

    return (
        <>
            <HtmlHead title={page?.title || PAGE_FALLBACK_TITLE} meta={page?.global_field || undefined} />
            <Container sx={{ marginTop: 5 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={12} sm={12}>
                        <Item>
                            <MainContent title={page?.title || PAGE_FALLBACK_TITLE}>
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
                        dogs.map((i: Dog) => {
                            const uid = i.system!.uid;
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

export const getServerSideProps: GetServerSideProps<IIndexProps> = async (context) => {
    const { data } = await new GraphQLClient().Client.query<FetchPageQuery, FetchPageQueryVariables>({
        query: FetchPageDocument,
        variables: { url: context.resolvedUrl }
    });

    const settings: AllGlobalSettings | undefined = data?.all_global_settings || undefined;
    return {
        props: {
            settings: GraphQLClient.fromGqlSettings(settings?.items?.[0] as GlobalSettings),
            page: data?.all_page?.items?.[0] || undefined
        }
    };
};
