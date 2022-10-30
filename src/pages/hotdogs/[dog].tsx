import { HtmlHead } from "@components/HtmlHead/HtmlHead";
import { Loading } from "@components/Loading/Loading";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";

export default function Dog() {
    return (
        <Container>
            <HtmlHead pageTitle="Loading..." />
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={4} sm={4}>
                    <Item>
                        <Loading>
                            <Typography variant="h4">Loading profile...</Typography>
                        </Loading>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
}
