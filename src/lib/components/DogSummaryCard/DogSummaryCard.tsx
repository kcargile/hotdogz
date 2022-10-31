import { GlobalSettingsContext } from "@context/GlobalSettingsContext";
import { tryCalculateAge } from "@core/util/DateTimeUtil";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import ReportIcon from "@mui/icons-material/Report";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import VaccinesIconRounded from "@mui/icons-material/VaccinesRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FC, useContext } from "react";

interface IDogSummaryCardProps {
    dog: any;
}

export const DogSummaryCard: FC<IDogSummaryCardProps> = ({ dog }) => {
    const theme = useTheme();
    const { fallbackMysteryImageUrl } = useContext(GlobalSettingsContext).settings;

    const vaxed = dog.vax_status === "Vaccinated";
    const chips = dog.seeking.map((i: string) => {
        return (
            <Chip
                icon={<VisibilityIcon fontSize="small" />}
                label={i}
                key={i}
                size="small"
                sx={{ marginTop: 1, marginRight: 1 }}
            />
        );
    });

    dog.likes.map((i: string) => {
        chips.push(
            <Chip
                icon={<CheckRoundedIcon fontSize="small" />}
                label={i}
                key={i}
                size="small"
                sx={{ bgcolor: theme.status.likes, marginTop: 1, marginRight: 1 }}
            />
        );
    });
    dog.dislikes.map((i: string) => {
        chips.push(
            <Chip
                icon={<NotInterestedIcon fontSize="small" />}
                label={i}
                key={i}
                size="small"
                sx={{ bgcolor: theme.status.dislike, marginTop: 1, marginRight: 1 }}
            />
        );
    });

    const photo = dog.photoConnection?.edges?.[0].node;

    return (
        <>
            <Card variant="outlined" sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        sx={{
                            position: "relative",
                            width: photo.dimension.width / 2,
                            height: photo.dimension.width / 2
                        }}
                    >
                        {/* <div
                            style={{
                                position: "relative",
                                width: photo.dimension.width / 2,
                                height: photo.dimension.width / 2
                            }}
                        > */}
                        <Image
                            fill
                            object-fit="cover"
                            alt={dog.title}
                            src={dog.photoConnection?.edges?.[0].node.url || fallbackMysteryImageUrl}
                        />
                        {/* </div> */}
                    </CardMedia>
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px"
                        }}
                    >
                        <Typography variant="h5">
                            {dog.title} ({tryCalculateAge(dog.birthday)})
                        </Typography>
                        <Typography variant="h6">{dog.breed}</Typography>
                        <Rating
                            value={dog.good_fetch_rating}
                            max={5}
                            size="small"
                            icon={<StarRateIcon fontSize="small" sx={{ color: theme.status.rating }} />}
                            emptyIcon={<StarOutlineIcon fontSize="small" sx={{ color: theme.status.rating }} />}
                        />
                    </Box>
                </Box>
                <CardContent>
                    <Box>
                        <Box component="span" sx={{ margin: 0.5 }}>
                            <Tooltip title={vaxed ? "Vaccinated!" : "Bring a mask!"} arrow>
                                <VaccinesIconRounded
                                    sx={{
                                        bgcolor: !vaxed ? theme.status.danger : theme.status.likes
                                    }}
                                />
                            </Tooltip>
                        </Box>
                        <Box component="span" sx={{ margin: 0.5 }}>
                            <Tooltip title={dog.spayed_neutered ? "I'm Fixed!" : "Puppymill!"} arrow>
                                <LocalHospitalRoundedIcon
                                    sx={{ bgcolor: !dog.spayed_neutered ? theme.status.danger : theme.status.likes }}
                                />
                            </Tooltip>
                        </Box>
                        <Box component="span" sx={{ margin: 0.5 }}>
                            <Tooltip title={`My favorite color is ${dog.favorite_color.toLowerCase()}.`} arrow>
                                <ColorLensIcon sx={{ color: "white", bgcolor: dog.favorite_color }} />
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box>{chips}</Box>
                </CardContent>
                <CardActions sx={{ marginTop: "auto", bgcolor: "rgba(0, 0, 0, 0.08)" }}>
                    <Link href={dog.url} underline="hover">
                        <Button size="small" sx={{ color: theme.palette.primary.dark }}>
                            Buttsniff&apos;m
                            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" />
                        </Button>
                    </Link>
                    <Button size="small" sx={{ color: theme.status.danger, marginLeft: "auto" }}>
                        Report a Kat <ReportIcon fontSize="small" />
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default DogSummaryCard;
