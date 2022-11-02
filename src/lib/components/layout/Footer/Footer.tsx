import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

interface IFooterProps {
    attribution: string;
    children?: ReactNode[];
    copyright: string;
}

export const Footer: FC<IFooterProps> = ({ attribution, children, copyright }) => {
    const theme = useTheme();
    const [visible, setVisible] = useState(true);
    const { hideFooter } = useContext(GlobalSettingsContext).settings;

    useEffect(() => setVisible(!hideFooter), [hideFooter]);

    if (!visible) return <></>;

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
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
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

export default Footer;
