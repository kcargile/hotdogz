"use client";

import { GlobalFooter } from "@components/GlobalFooter/GlobalFooter";
import { GlobalHeader } from "@components/GlobalHeader/GlobalHeader";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@theme/Theme";
import { FC, ReactNode, useContext } from "react";

interface IGlobalLayoutProps {
    children?: ReactNode;
}

export const GlobalLayout: FC<IGlobalLayoutProps> = ({ children }) => {
    const { attribution, copyright, siteTitle, siteLogoUrl } = useContext(GlobalSettingsContext).settings;
    return (
        <ThemeProvider theme={theme}>
            <GlobalHeader siteTitle={siteTitle} siteLogoUrl={siteLogoUrl} />
            {children}
            <GlobalFooter attribution={attribution} copyright={copyright} />
        </ThemeProvider>
    );
};
