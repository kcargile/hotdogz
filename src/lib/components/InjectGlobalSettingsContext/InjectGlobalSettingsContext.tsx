import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import Head from "next/head";
import { FC, useContext, useEffect } from "react";

interface IInjectGlobalSettingsContext extends Partial<Omit<GlobalSettings, "hideFooter">> {}

export const InjectGlobalSettingsContext: FC<IInjectGlobalSettingsContext> = (settings) => {
    const context = useContext(GlobalSettingsContext);
    let didUpdate = false;

    useEffect(() => {
        if (context.updateSettings) {
            context.updateSettings(settings as GlobalSettings);
            didUpdate = true;
        }
    }, [context]);

    return !didUpdate ? (
        <Head>
            <meta name="hd:gsup" content="Nobody expects the Spanish Inquisition!" />
        </Head>
    ) : (
        <Head>
            <meta name="hd:gsup" content={Date.now().toString()} />
        </Head>
    );
};

export default InjectGlobalSettingsContext;
