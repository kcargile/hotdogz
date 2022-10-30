import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface IGlobalFooterProps {
    attribution: string;
    children?: ReactNode[];
    copyright: string;
}

export const GlobalFooter: FC<IGlobalFooterProps> = ({ attribution, children, copyright }) => {
    const theme = useTheme();
    return (
        <Container
            sx={{
                color: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.dark,
                height: "10vw",
                marginTop: 5,
                paddingBottom: 10,
                paddingTop: 3,
                textAlign: "center",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}
        >
            <footer>
                {children}
                <Typography variant="subtitle1">
                    <Container component="span" dangerouslySetInnerHTML={{ __html: copyright }} />
                </Typography>
                <Typography variant="subtitle1">{attribution}</Typography>
            </footer>
        </Container>
    );
};
