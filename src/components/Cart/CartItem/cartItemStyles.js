import { styled } from "@mui/material/styles";
import { CardContent, CardActions, CardMedia } from "@mui/material";

// Styled components
const StyledCardMedia = styled(CardMedia)({
  height: 260,
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  justifyContent: "space-between",
  height: 55,
});

const StyledCardActions = styled(CardActions)({
  justifyContent: "space-between",
});

const Buttons = styled("div")({
  display: "flex",
  alignItems: "center",
});

// Exporting all styled components
export { StyledCardMedia, StyledCardContent, StyledCardActions, Buttons };
