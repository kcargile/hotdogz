import { GlobalNavigation } from "@components/GlobalNavigation/GlobalNavigation";
import PetsIcon from "@mui/icons-material/Pets";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface IGlobalHeaderProps {
    siteTitle: string;
    siteLogoUrl?: string;
}

export const GlobalHeader: FC<IGlobalHeaderProps> = ({ siteTitle, siteLogoUrl }) => {
    const theme = useTheme();

    return (
        <AppBar position="static">
            <Toolbar>
                {!siteLogoUrl ? (
                    <Avatar variant="square" src={siteLogoUrl} />
                ) : (
                    <Avatar variant="square" sx={{ backgroundColor: "transparent" }}>
                        <WhatshotIcon fontSize="large" sx={{ color: theme.status.failed, verticalAlign: "middle" }} />
                    </Avatar>
                )}
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    {siteTitle}
                </Typography>
                <GlobalNavigation />
                <Avatar sx={{ marginLeft: 2 }}>
                    <PetsIcon />
                </Avatar>
            </Toolbar>
        </AppBar>
    );
};
