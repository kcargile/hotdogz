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

export const fromContentType = (page: any, settings: any) => {
    if (!settings) {
        return undefined;
    }

    const headerNav = new Array<NavigationItem>();
    if (page) {
        page.header[0].primary_navigation[0].items.map((i: any) => {
            headerNav.push({ title: i.target_external.title || "", href: i.target_external.href || "#" });
        });
    }

    return {
        attribution: settings.attribution,
        copyright: settings.copyright,
        fallbackMysteryImageUrl: settings.default_dog_image.url,
        faviconUrl: settings.favicon.url,
        headerNavItems: headerNav,
        siteTitle: settings.site_title,
        siteLogoUrl: settings.logo.url
    } as GlobalSettings;
};
