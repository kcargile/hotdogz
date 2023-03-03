import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { Seo } from "@core/graphql/__generated__/graphql";
import { PAGE_FALLBACK_TITLE, SITE_FALLBACK_TITLE } from "@theme/Constants";
import Head from "next/head";
import { FC, ReactNode, useContext } from "react";

interface HtmlHeadProps {
    children?: ReactNode;
    gsup?: boolean;
    meta?: Seo;
    title?: string;
}

export const HtmlHead: FC<HtmlHeadProps> = ({ children, gsup, meta, title }) => {
    const { siteTitle } = useContext(GlobalSettingsContext).settings;
    return (
        <Head>
            <title>{`${title || PAGE_FALLBACK_TITLE} | ${siteTitle || SITE_FALLBACK_TITLE}`}</title>
            <meta name="hd:version" content={process.env.NEXT_PUBLIC_APP_VERSION || "K.7.C"} />
            <meta name="hd:❗" content="Nobody expects the Spanish Inquisition!" />
            {meta?.description && <meta name="description" content={meta.description} />}
            {meta?.title && <meta name="title" content={meta.title} />}
            {meta?.canonical && meta.canonical.href && <link rel="canonical" href={meta.canonical.href} />}
            {meta?.noindex && <meta name="robots" content="noindex" />}
            {meta?.nofollow && <meta name="robots" content="noindex" />}
            {children}
        </Head>
    );
};

export default HtmlHead;
