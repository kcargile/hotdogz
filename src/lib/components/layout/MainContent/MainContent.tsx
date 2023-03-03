import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface MainContentProps {
    children?: ReactNode;
    title?: string;
}

export const MainContent: FC<MainContentProps> = ({ children, title }) => {
    return (
        <>
            {title && <Typography variant="h4">{title}</Typography>}
            {children}
        </>
    );
};

export default MainContent;
