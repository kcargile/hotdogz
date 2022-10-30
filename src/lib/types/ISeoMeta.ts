export interface ISeoMeta {
    canonical?: {
        href?: string;
    };
    description?: string;
    nofollow?: boolean;
    noindex?: boolean;
    og_tags?: string[];
    schema?: string;
    title?: string;
}
