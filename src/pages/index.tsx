import DogSummaryCard from "@components/dog/DogSummaryCard";
import HtmlHead from "@components/html/HtmlHead";
import MainContent from "@components/layout/MainContent";
import { jsonToHTML } from "@contentstack/utils";
import { fromContentType, GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { ContentStackClient } from "@core/cs/ContentStackClient";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import { PAGE_FALLBACK_TITLE } from "@theme/Constants";
import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react";

// TODO: fix breakpoint issues in grid

interface IndexProps {
    page: any;
    settings?: GlobalSettings;
}

export default function Index({ page, settings }: IndexProps) {
    const context = useContext(GlobalSettingsContext);
    const dogs = page.featured_content;

    const mainContent = page.main_content;
    jsonToHTML({ entry: mainContent, paths: ["main_copy.item"] });

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
                                {mainContent[0] && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: `<p>${mainContent[0].main_copy.title}</p>`
                                        }}
                                    />
                                )}
                                {mainContent[0] && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: `${mainContent[0].main_copy.item}`
                                        }}
                                    />
                                )}
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

export const getServerSideProps: GetServerSideProps<IndexProps> = async (context) => {
    const cs = new ContentStackClient();
    const settings = await cs.fetchGlobalSettings();
    const page = await cs.fetchPage(context.resolvedUrl, [
        "featured_content",
        "header.primary_navigation",
        "main_content"
    ]);

    return {
        props: {
            settings: fromContentType(page, settings),
            page
        }
    };
};
