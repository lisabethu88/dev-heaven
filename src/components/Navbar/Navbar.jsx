import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/devheavenlogo.png";
import {
  StyledAppBar,
  Title,
  Image,
  MenuButton,
  Grow,
  Search,
  SearchIcon,
  InputRoot,
  InputInput,
} from "./navbarStyles";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <>
      <StyledAppBar position="fixed" color="inherit">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Title variant="h4" color="#413b61" component={Link} to="/">
              <Image src={logo} alt="Dev Heaven" height="40px" width="40px" />
              Dev Heaven
            </Title>
            {/* <Typography>The Ultimate Survival Kit for Developers</Typography> */}
          </Box>
          <Grow />
          {location.pathname === "/" && (
            <MenuButton>
              <IconButton
                aria-label="Show cart items"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge
                  badgeContent={totalItems}
                  color="default"
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#7b86c7",
                    },
                  }}
                >
                  <ShoppingCart sx={{ color: "#413b61" }} />
                </Badge>
              </IconButton>
            </MenuButton>
          )}
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Navbar;
