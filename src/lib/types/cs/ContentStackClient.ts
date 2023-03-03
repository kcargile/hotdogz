import contentstack from "contentstack";

export class ContentStackClient {
    public readonly Client = contentstack.Stack({
        api_key: process.env.CONTENTSTACK_API_KEY!,
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
        environment: process.env.CONTENTSTACK_ENVIRONMENT!
    });

    public async fetchPage(url: string, refs: string[] = [], type: string = "page", throwOnDuplicate: boolean = true) {
        const cs = this.Client;
        const pq = cs.ContentType(type).Query();
        const pr = await pq
            .where("url", url)
            .includeReference(refs)
            .includeEmbeddedItems()
            .includeCount()
            .toJSON()
            .find();
        if (pr[0] && pr[0].length !== 1 && throwOnDuplicate) {
            // there should be exactly one homepage
            throw new Error("Doggonnit, some kat jacked up this page. Sick em!! 🐕");
        }

        return pr[0][0];
    }

    public async fetchGlobalSettings(throwOnDuplicate: boolean = true) {
        const cs = this.Client;
        const sq = await cs.ContentType("global_settings").Query();
        const sr = await sq.includeCount().toJSON().find();
        if (sr[0] && sr[0].length !== 1 && throwOnDuplicate) {
            // there should be exactly one settings entry
            throw new Error("Kat got into the settings.");
        }

        return sr[0][0];
    }
}
