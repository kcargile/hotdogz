import contentstack from "contentstack";

export class ContentStackClient {
    public readonly Client = contentstack.Stack({
        api_key: process.env.CONTENTSTACK_API_KEY!,
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
        environment: process.env.CONTENTSTACK_ENVIRONMENT!
    });
}
