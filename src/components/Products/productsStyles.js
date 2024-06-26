import { styled } from "@mui/material/styles";

// Styled components
const Toolbar = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "transparent",
  padding: theme.spacing(3),
}));

const Root = styled("div")({
  flexGrow: 1,
});

// Exporting all styled components
export { Toolbar, Content, Root };
