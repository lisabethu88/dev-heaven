import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

const StyledCard = styled(Card)({
  maxWidth: "100%",
  height: "100%",
  borderRadius: 10,
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "75%", // 16:9 aspect ratio
  backgroundSize: "contain",
  backgroundPosition: "center",
});

const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "flex-end",
});

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: 55,
});

export { StyledCard, StyledCardMedia, StyledCardActions, StyledDiv };
