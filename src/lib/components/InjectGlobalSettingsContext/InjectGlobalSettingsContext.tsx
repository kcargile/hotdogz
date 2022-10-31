import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import Head from "next/head";
import { FC, useContext } from "react";

interface IInjectGlobalSettingsContext extends Partial<Omit<GlobalSettings, "hideFooter">> {}

export const InjectGlobalSettingsContext: FC<IInjectGlobalSettingsContext> = (settings) => {
    const context = useContext(GlobalSettingsContext);

    // console.debug(settings);

    let didUpdate = false;
    if (context.updateSettings) {
        context.updateSettings(settings as GlobalSettings);
        didUpdate = true;
    }

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
