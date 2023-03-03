import { Url } from "url";

export interface Seo {
    canonical?: Url;
    description?: string;
    nofollow?: boolean;
    noindex?: boolean;
    og_tags?: Array<OgTag>;
    schema?: string;
    title?: string;
}

export interface OgTag {
    key?: string;
    value?: string;
}
