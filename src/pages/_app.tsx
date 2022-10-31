import GlobalLayout from "@components/GlobalLayout";
import { GlobalSettingsContextProvider } from "@context/GlobalSettingsContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalSettingsContextProvider>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
            </Head>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </GlobalSettingsContextProvider>
    );
}
