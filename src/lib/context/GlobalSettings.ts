import { NavigationItem } from "@components/layout/Navigation";

export type GlobalSettings = {
    attribution: string;
    copyright: string;
    fallbackMysteryImageUrl: string;
    faviconUrl: string;
    headerNavItems: Array<NavigationItem>;
    hideFooter: boolean;
    siteTitle: string;
    siteLogoUrl: string;
};
