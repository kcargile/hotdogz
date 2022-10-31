import HtmlHead from "@components/HtmlHead";
import Loading from "@components/Loading";
import Container from "@mui/material/Container";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";

export default function Dog() {
    return (
        <Container>
            <HtmlHead pageTitle="Fetching Profile..." />
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={12} sm={12}>
                    <Item>
                        <Loading loading={true} />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
}
