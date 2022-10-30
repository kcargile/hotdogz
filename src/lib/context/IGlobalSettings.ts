import { IFeatureFlag } from "@core/IFeatureFlag";

export interface IGlobalSettings {
    attribution: string;
    copyright: string;
    fallbackMysteryImageUrl: string;
    faviconUrl: string;
    featureFlags?: IFeatureFlag;
    siteTitle: string;
    siteLogoUrl: string;
}
