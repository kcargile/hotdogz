"use client";

import { NavigationItem } from "@components/layout/Navigation";
import {
    DOG_FALLBACK_IMAGE_URL,
    SITE_FALLBACK_ATTRIBUTION,
    SITE_FALLBACK_COPYRIGHT,
    SITE_FALLBACK_FAVICON_URL,
    SITE_FALLBACK_LOGO_URL,
    SITE_FALLBACK_TITLE
} from "@theme/Constants";
import React, { FC, useState } from "react";
import { GlobalSettings } from "./GlobalSettings";
import { GlobalSettingsContextProps } from "./GlobalSettingsContextProps";

const defaultState = {
    settings: {
        attribution: SITE_FALLBACK_ATTRIBUTION,
        copyright: SITE_FALLBACK_COPYRIGHT,
        fallbackMysteryImageUrl: DOG_FALLBACK_IMAGE_URL,
        faviconUrl: SITE_FALLBACK_FAVICON_URL,
        headerNavItems: new Array<NavigationItem>(),
        hideFooter: false,
        siteLogoUrl: SITE_FALLBACK_LOGO_URL,
        siteTitle: SITE_FALLBACK_TITLE
    }
};

export const GlobalSettingsContext = React.createContext<GlobalSettingsContextProps>(defaultState);
export const GlobalSettingsContextProvider: FC<any> = ({ children }) => {
    const [settings, setSettings] = useState(defaultState.settings);
    const updateSettings = (s?: GlobalSettings) => {
        s && setSettings(s);
    };

    return (
        <GlobalSettingsContext.Provider
            value={{
                settings,
                updateSettings
            }}
        >
            {children}
        </GlobalSettingsContext.Provider>
    );
};
