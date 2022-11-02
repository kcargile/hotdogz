"use client";

import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@theme/Theme";
import { FC, ReactNode, useContext } from "react";

interface IRootLayoutProps {
    children?: ReactNode;
}

export const Root: FC<IRootLayoutProps> = ({ children }) => {
    const { attribution, copyright, siteTitle, siteLogoUrl } = useContext(GlobalSettingsContext).settings;
    return (
        <ThemeProvider theme={theme}>
            <Header siteTitle={siteTitle} siteLogoUrl={siteLogoUrl} />
            {children}
            <Footer attribution={attribution} copyright={copyright} />
        </ThemeProvider>
    );
};

export default Root;
