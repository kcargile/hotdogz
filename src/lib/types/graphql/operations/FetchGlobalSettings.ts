import { gql } from "@apollo/client";

const FETCH_GLOBAL_SETTINGS = gql`
    query FetchGlobalSettings {
        globalSettings: all_global_settings {
            total
            items {
                feature_flags {
                    enabled
                    feature
                }
                logoConnection {
                    edges {
                        node {
                            url
                            content_type
                            dimension {
                                height
                                width
                            }
                        }
                    }
                }
                site_title
                title
                system {
                    created_at
                    uid
                }
            }
        }
    }
`;

// Document.getInitialProps = async (ctx: any) => {
//     const { data, loading } = await GraphQLClClient.Client.query<{ dogs: any; page: any; globalSettings: any }>({
//         query: FETCH_GLOBAL_SETTINGS,
//         errorPolicy: "ignore"
//     });
//     const res = await fetch("https://api.github.com/repos/vercel/next.js");
//     const json = await res.json();
//     return { settings: json.stargazers_count };

//     // return {
//     //     settings: {
//     //         loading: loading,
//     //         global: data.globalSettings.items[0] || {}
//     //     }
//     // };
// };

// export const getInitialProps: GetServerSideProps<{ loading: any; globalSettings: any }> = async (context) => {
//     const { data, loading } = await GraphQLClClient.Client.query<{ dogs: any; page: any; globalSettings: any }>({
//         query: FETCH_GLOBAL_SETTINGS,
//         errorPolicy: "ignore"
//     });

//     return {
//         props: {
//             loading: loading,
//             globalSettings: data.globalSettings.items[0] || {}
//         }
//     };
// };
