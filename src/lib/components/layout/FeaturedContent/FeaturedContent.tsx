import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface FeaturedContentProps {
    children?: ReactNode;
    title?: string;
}

export const FeaturedContent: FC<FeaturedContentProps> = ({ children, title }) => {
    return (
        <>
            {title && <Typography variant="h4">{title}</Typography>}
            {children}
        </>
    );
};

export default FeaturedContent;
