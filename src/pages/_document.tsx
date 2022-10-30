import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { SITE_FALLBACK_FAVICON_URL } from "@theme/Constants";
import { Head, Html, Main, NextScript } from "next/document";
import { useContext } from "react";

export default function Document() {
    const { faviconUrl } = useContext(GlobalSettingsContext).settings;

    return (
        <Html lang="en-us">
            <Head>
                <meta name="application-name" content="Doggiedating.dev" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href={faviconUrl || SITE_FALLBACK_FAVICON_URL} />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
