import { ApolloClient, InMemoryCache } from "@apollo/client";

export class GraphQLClClient {
    public static Client = new ApolloClient({
        uri: `${process.env.CONTENTSTACK_BASE_URL}/${process.env.CONTENTSTACK_API_KEY}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`,
        cache: new InMemoryCache(),
        headers: {
            access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!
        },
        ssrMode: true
    });
}
