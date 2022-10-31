import { GlobalSettings } from "@context/GlobalSettings";
import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import Backdrop from "@mui/material/Backdrop";
import Container from "@mui/material/Container";
import Image from "next/image";
import { FC, ReactNode, useContext } from "react";

interface ILoadingProps {
    children?: ReactNode;
    loading: boolean;
}

export const Loading: FC<ILoadingProps> = ({ children, loading }) => {
    const context = useContext(GlobalSettingsContext);
    const settings: Partial<GlobalSettings> = { hideFooter: loading };
    context.updateSettings && context.updateSettings(settings as GlobalSettings);

    if (!loading) return <></>;

    return (
        <>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                <Container sx={{ justifyContent: "center" }}>
                    <Image priority={true} src="/loading.gif" alt="Loading..." width={270} height={270} />
                    <Container>{children}</Container>
                </Container>
            </Backdrop>
        </>
    );
};

export default Loading;
