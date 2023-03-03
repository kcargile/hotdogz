import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FC } from "react";

// TODO: wire this up to CMS data

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
    const navItems = ["FAQ", "Login"];
    return (
        <List>
            {navItems.map((i) => (
                <Button color="inherit" key={i}>
                    {i}
                </Button>
            ))}
        </List>
    );
};

export default Navigation;
