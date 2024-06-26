import { styled } from "@mui/material/styles";
import { Typography, Button, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

// Styled components
const Toolbar = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Title = styled(Typography)({
  marginTop: "5%",
});

const EmptyButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
  [theme.breakpoints.down("xs")]: {
    marginBottom: "5px",
  },
  [theme.breakpoints.up("xs")]: {
    marginRight: "20px",
  },
}));

const CheckoutButton = styled(Button)({
  minWidth: "150px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const CardDetails = styled("div")({
  display: "flex",
  marginTop: "10%",
  width: "100%",
  justifyContent: "space-between",
});

// Exporting all styled components
export { Toolbar, Title, EmptyButton, CheckoutButton, StyledLink, CardDetails };
