import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { ISeoMeta } from "@core/ISeoMeta";
import { PAGE_FALLBACK_TITLE, SITE_FALLBACK_TITLE } from "@theme/Constants";
import Head from "next/head";
import { FC, useContext } from "react";

interface IHtmlHeadProps {
    meta?: ISeoMeta;
    pageTitle?: string;
}

export const HtmlHead: FC<IHtmlHeadProps> = ({ meta, pageTitle }) => {
    const { siteTitle } = useContext(GlobalSettingsContext).settings;
    return (
        <Head>
            <title>{`${pageTitle || PAGE_FALLBACK_TITLE} | ${siteTitle || SITE_FALLBACK_TITLE}`}</title>
            <meta name="description" content={meta?.description} />
            <meta name="title" content={meta?.title} />
            <meta name="hd:version" content={process.env.NEXT_PUBLIC_APP_VERSION || "K.7.C"} />
            {meta?.canonical && meta.canonical.href && <link rel="canonical" href={meta.canonical.href} />}
            {meta?.noindex && <meta name="robots" content="noindex" />}
            {meta?.nofollow && <meta name="robots" content="noindex" />}
        </Head>
    );
};

export default HtmlHead;
