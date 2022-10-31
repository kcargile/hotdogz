import { gql } from "@apollo/client";
import { GlobalSettings } from "@context/GlobalSettings";
import { IHtmlContentFragment } from "@core/IHtmlContentFragment";
import { GraphQLClClient } from "../GraphQLClient";

const FETCH_HOMEPAGE = gql`
    query FetchAllDogsPage($url: String!) {
        settings: all_global_settings {
            total
            items {
                attribution
                copyright
                default_dog_image: default_dog_imageConnection {
                    edges {
                        node {
                            url
                            dimension {
                                height
                                width
                            }
                            system {
                                uid
                                created_at
                            }
                        }
                    }
                }
                favicon: faviconConnection {
                    edges {
                        node {
                            url
                            dimension {
                                height
                                width
                            }
                            system {
                                uid
                                created_at
                            }
                        }
                    }
                }
                site_title
                site_logo: logoConnection {
                    edges {
                        node {
                            url
                            dimension {
                                height
                                width
                            }
                            system {
                                uid
                                created_at
                            }
                        }
                    }
                }
            }
        }
        page: all_page(where: { url: $url }) {
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
    page?: any;
    settings?: Partial<Omit<GlobalSettings, "hideFooter">> | null;
}

export const query = async (url: string): Promise<IFetchHotdogsPageResult> => {
    const { data, loading } = await GraphQLClClient.Client.query<
        { content: any; dogs: any; page: any; settings: any },
        { url: string }
    >({
        query: FETCH_HOMEPAGE,
        variables: { url },
        errorPolicy: "none"
    });

    // TODO: refactor the any types here
    // TODO: clean up this mess w/types...

    const mainCopy = data.page?.items?.[0]?.content?.find(
        (i: { __typename: string }) => i.__typename === "PageMainContentMainCopy"
    ).main_copy;

    const content = mainCopy.item.json.children?.[0]?.children?.[0].text || null;
    const contentTag = mainCopy.item.json.children?.[0]?.type || null;
    const contentTitle = mainCopy.title || null;

    const dogs =
        data.dogs.items?.[0]?.main_content
            ?.find((i: { __typename: string }) => i.__typename === "PageMainContentFeaturedContent")
            .featured_content.itemsConnection.edges.map((i: any) => i.node) || [];

    const page = data.page?.items[0] || null;

    const settingsItems = data.settings?.items?.[0] || null;
    const settings: Partial<Omit<GlobalSettings, "hideFooter">> | null = settingsItems
        ? {
              attribution: settingsItems.attribution || null,
              copyright: settingsItems.copyright || null,
              fallbackMysteryImageUrl: settingsItems.default_dog_image?.edges?.[0].node.url || null,
              faviconUrl: settingsItems.favicon?.edges?.[0]?.node.url || null,
              siteLogoUrl: settingsItems.site_logo?.edges?.[0]?.node.url || null,
              siteTitle: settingsItems.site_title || "BAD DOG"
          }
        : null;

    return {
        content: { content: content, tag: contentTag, title: contentTitle },
        dogs,
        loading,
        page,
        settings
    };
};
