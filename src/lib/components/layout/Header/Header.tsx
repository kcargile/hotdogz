import Navigation from "@components/layout/Navigation";
import PetsIcon from "@mui/icons-material/Pets";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface HeaderProps {
    siteTitle: string;
    siteLogoUrl?: string;
}

export const Header: FC<HeaderProps> = ({ siteTitle, siteLogoUrl }) => {
    const theme = useTheme();

    return (
        <AppBar position="static">
            <Toolbar>
                <WhatshotIcon fontSize="large" sx={{ color: theme.status.failed, verticalAlign: "middle" }} />
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    {siteTitle}
                </Typography>
                <Navigation />
                <Avatar sx={{ marginLeft: 2 }}>
                    <Tooltip title="Not logged in.">
                        <PetsIcon />
                    </Tooltip>
                </Avatar>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
