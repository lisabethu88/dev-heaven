import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const StyledLayout = styled("div")(({ theme }) => ({
  marginTop: "5%",
  display: "flex",
  justifyContent: "center",
  width: "auto",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  maxWidth: 600,
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginTop: 60,
  },
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  padding: theme.spacing(3, 0, 5),
}));

const StyledButtons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(1),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: "20px 0",
}));

const StyledSpinner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export {
  StyledAppBar,
  StyledToolbar,
  StyledLayout,
  StyledPaper,
  StyledStepper,
  StyledButtons,
  StyledButton,
  StyledDivider,
  StyledSpinner,
};
