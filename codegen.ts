import type { CodegenConfig } from "@graphql-codegen/cli";
import { gqlEndpointUri } from "./src/lib/types/graphql/GraphQLClient";

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            [gqlEndpointUri]: {
                headers: { access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN! }
            }
        }
    ],
    documents: "src/lib/types/graphql/**/*.gql",
    generates: {
        "src/lib/types/graphql/__generated__/": {
            preset: "client",
            plugins: []
        },
        "src/lib/types/graphql/graphql.schema.json": {
            plugins: ["introspection"]
        }
    },
    config: {
        namingConvention: {
            transformUnderscore: true
        }
    }
};

export default config;
