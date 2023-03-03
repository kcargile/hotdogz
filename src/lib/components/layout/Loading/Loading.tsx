import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import { FC, ReactNode, useContext, useEffect } from "react";

interface LoadingProps {
    children?: ReactNode;
    loading: boolean;
}

export const Loading: FC<LoadingProps> = ({ children, loading }) => {
    const context = useContext(GlobalSettingsContext);
    useEffect(() => {
        context.settings.hideFooter = true;
    }, [context]);

    if (!loading) return <></>;

    return (
        <>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                <Box sx={{ justifyContent: "center" }}>
                    <Image priority={true} src="/loading.gif" alt="Loading..." width={270} height={270} />
                    <Container>{children}</Container>
                </Box>
            </Backdrop>
        </>
    );
};

export default Loading;
