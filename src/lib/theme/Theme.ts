import { green, grey, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            dislike: string;
            likes: string;
            success: string;
            danger: string;
            failed: string;
            rating: string;
        };
    }
    interface ThemeOptions {
        status?: {
            dislike?: string;
            likes?: string;
            success?: string;
            danger?: string;
            failed?: string;
            rating?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        primary: grey
    },
    status: {
        dislike: red[100],
        likes: green[100],
        success: green[500],
        danger: orange[500],
        failed: red[500],
        rating: "#ffc107"
    }
});
