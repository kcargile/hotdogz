import { gql } from "@apollo/client";
import { IHtmlContentFragment } from "@core/IHtmlContentFragment";
import { GraphQLClClient } from "../GraphQLClient";

// TODO: fix arg (see id query)

const FETCH_HOTDOGS_PAGE = gql`
    query FetchAllDogsPage {
        page: all_page(where: { url: "/hotdogs" }) {
            total
            items {
                title
                url
                seo: global_field {
                    canonical {
                        href
                        title
                    }
                    description
                    nofollow
                    noindex
                    og_tags {
                        key
                        value
                    }
                    schema
                    title
                }
                content: main_content {
                    ... on PageMainContentMainCopy {
                        __typename
                        main_copy {
                            item {
                                json
                            }
                            title
                        }
                    }
                }
                system {
                    created_at
                    uid
                }
            }
        }
        dogs: all_page {
            total
            items {
                main_content {
                    ... on PageMainContentFeaturedContent {
                        __typename
                        featured_content {
                            itemsConnection {
                                totalCount
                                edges {
                                    node {
                                        ... on Dog {
                                            title
                                            url
                                            bio
                                            birthday
                                            breed
                                            dislikes
                                            favorite_color
                                            good_fetch_rating
                                            likes
                                            photoConnection {
                                                edges {
                                                    node {
                                                        title
                                                        url
                                                        content_type
                                                        filename
                                                        file_size
                                                        description
                                                        metadata
                                                        unique_identifier
                                                    }
                                                }
                                                totalCount
                                            }
                                            seeking
                                            spayed_neutered
                                            system {
                                                created_at
                                                uid
                                            }
                                            vax_status
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export interface IFetchHotdogsPageResult {
    dogs: any[];
    content?: IHtmlContentFragment;
    loading: boolean;
    page: any;
}

export const query = async (): Promise<IFetchHotdogsPageResult> => {
    const { data, loading } = await GraphQLClClient.Client.query<{ content: any; dogs: any; page: any }>({
        query: FETCH_HOTDOGS_PAGE,
        errorPolicy: "none"
    });

    const mainCopy = data.page?.items?.[0].content?.find(
        (i: { __typename: string }) => i.__typename === "PageMainContentMainCopy"
    ).main_copy;

    const content = mainCopy.item.json.children[0].children[0].text || null;
    const contentTag = mainCopy.item.json.children[0].type || null;
    const contentTitle = mainCopy.title || null;

    const dogs =
        data.dogs.items[0]?.main_content
            ?.find((i: { __typename: string }) => i.__typename === "PageMainContentFeaturedContent")
            .featured_content.itemsConnection.edges.map((i: any) => i.node) || [];

    const page = data.page?.items[0] || null;

    return {
        content: { content: content, tag: contentTag, title: contentTitle },
        dogs,
        loading,
        page
    };
};
