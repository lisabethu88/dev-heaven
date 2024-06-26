import { styled } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";

const drawerWidth = 0;

// Styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

// Additional styled components
const Title = styled(Typography)({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
  fontFamily: "Tiny5",
  textTransform: "uppercase",
  textShadow: "2px 2px #bbc8eb",
});

const Image = styled("img")({
  marginRight: "10px",
  // backgroundColor: "#413b61",
  // borderRadius: 3,
  // padding: "0px 2px",
  // boxShadow: "2px 2px #bbc8eb",
});

const MenuButton = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
  // [theme.breakpoints.up("sm")]: {
  //   display: "none",
  // },
}));

const Grow = styled("div")({
  flexGrow: 1,
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white + "0.15", // Adjust to use theme color
  "&:hover": {
    backgroundColor: theme.palette.common.white + "0.25", // Adjust to use theme color
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIcon = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const InputRoot = styled("div")({
  color: "inherit",
});

const InputInput = styled("input")(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));

// Exporting all styled components
export {
  StyledAppBar,
  Title,
  Image,
  MenuButton,
  Grow,
  Search,
  SearchIcon,
  InputRoot,
  InputInput,
};
