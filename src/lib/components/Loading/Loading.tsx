import Backdrop from "@mui/material/Backdrop";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface ILoadingProps {
    children?: ReactNode;
}

export const Loading: FC<ILoadingProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                <Image src="/loading.gif" alt="Loading..." width={270} height={270} />
                <Container>{children}</Container>
            </Backdrop>
        </>
    );
};
