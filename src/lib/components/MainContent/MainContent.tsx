import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface IMainContentProps {
    children?: ReactNode;
    title?: string;
}

export const MainContent: FC<IMainContentProps> = ({ children, title }) => {
    return (
        <>
            {title && <Typography variant="h4">{title}</Typography>}
            {children}
        </>
    );
};
