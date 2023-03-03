import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FC } from "react";

interface NavigationProps {
    items?: Array<NavigationItem>;
}

export interface NavigationItem {
    title: string;
    href: string;
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
    return (
        <List>
            {items &&
                items.map((i) => (
                    <Button color="inherit" key={i.title} href={i.href}>
                        {i.title}
                    </Button>
                ))}
        </List>
    );
};

export default Navigation;
