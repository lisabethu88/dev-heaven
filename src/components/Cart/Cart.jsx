import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import {
  EmptyButton,
  CheckoutButton,
  CardDetails,
  Toolbar,
  StyledLink,
} from "./cartStyles";
import CartItem from "./CartItem/CartItem";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Your cart is empty. <StyledLink to="/">Start shopping!</StyledLink>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      {/* Card Details */}
      <CardDetails>
        <Typography variant="h4" gutterBottom fontFamily="Lexend">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {/* EmptyButton */}
          <EmptyButton
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
            sx={{
              fontFamily: "Lexend",
              color: "#e8eefe",
              backgroundColor: "#413b61",
              // transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#e8eefe",
                color: "#413b61",
                // transform: "scale(1.05)",
                // transition: "all 0.3s ease-in-out",
              },
            }}
          >
            Empty Cart
          </EmptyButton>
          {/* CheckoutButton */}
          <CheckoutButton
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
            sx={{
              fontFamily: "Lexend",
              backgroundColor: "#5B613B",
              color: "#f0fccb",
              "&:hover": {
                // transform: "scale(1.05)",
                // transition: "all 0.3s ease-in-out",              fontFamily: "Lexend",
                color: "#5B613B",
                backgroundColor: "#f0fccb",
                // transition: "all 0.3s ease-in-out",
              },
            }}
          >
            Checkout
          </CheckoutButton>
        </Box>
      </CardDetails>
    </>
  );

  if (!cart.line_items)
    return (
      <Container>
        <Toolbar />
        <Loading />
      </Container>
    );
  return (
    <Container>
      {/* Toolbar */}
      <Toolbar />
      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        fontFamily={"Tiny5"}
        color="#413b61"
        textTransform={"uppercase"}
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
