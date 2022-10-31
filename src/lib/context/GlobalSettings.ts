import { IFeatureFlag } from "@core/IFeatureFlag";

export type GlobalSettings = {
    attribution: string;
    copyright: string;
    fallbackMysteryImageUrl: string;
    faviconUrl: string;
    featureFlags?: IFeatureFlag;
    hideFooter: boolean;
    siteTitle: string;
    siteLogoUrl: string;
};
