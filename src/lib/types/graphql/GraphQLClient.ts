import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettings as GqlSettings } from "@core/graphql/__generated__/graphql";

export const gqlEndpointUri = `${process.env.CONTENTSTACK_BASE_URL}/${process.env.CONTENTSTACK_API_KEY}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`;
export class GraphQLClient {
    public readonly Client = new ApolloClient({
        uri: gqlEndpointUri,
        cache: new InMemoryCache(),
        headers: {
            access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!
        },
        ssrMode: true,
        assumeImmutableResults: true // optimize since we can't perform mutations on the CS GQL API
    });

    public static fromGqlSettings = (s: GqlSettings): GlobalSettings | undefined => {
        return !s
            ? undefined
            : ({
                  attribution: s.attribution,
                  copyright: s.copyright,
                  fallbackMysteryImageUrl: s.default_dog_imageConnection?.edges?.[0]?.node?.url || undefined,
                  faviconUrl: s.faviconConnection?.edges?.[0]?.node?.url || undefined,
                  siteTitle: s.site_title,
                  siteLogoUrl: s.logoConnection?.edges?.[0]?.node?.url || undefined
              } as GlobalSettings);
    };
}
