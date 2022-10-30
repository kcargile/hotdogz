import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { FC, ReactNode } from "react";

interface ILoadingProps {
    children?: ReactNode;
}

export const Loading: FC<ILoadingProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                <CircularProgress color="inherit" />
                {children}
            </Backdrop>
        </>
    );
};
