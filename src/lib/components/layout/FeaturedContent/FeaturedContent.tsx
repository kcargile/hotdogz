import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface IFeaturedContentProps {
    children?: ReactNode;
    title?: string;
}

export const FeaturedContent: FC<IFeaturedContentProps> = ({ children, title }) => {
    return (
        <>
            {title && <Typography variant="h4">{title}</Typography>}
            {children}
        </>
    );
};

export default FeaturedContent;
