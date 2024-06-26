import React from "react";
import { Typography, Button, Card, IconButton, Tooltip } from "@mui/material";
import {
  StyledCardMedia,
  StyledCardContent,
  StyledCardActions,
  Buttons,
} from "./cartItemStyles";
import DeleteIcon from "@mui/icons-material/Delete";
const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <StyledCardMedia image={item.image.url} alt={item.name} />
      <StyledCardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </StyledCardContent>
      <StyledCardActions>
        <Buttons>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </Buttons>
        <Tooltip title="Remove">
          <IconButton
            variant="contained"
            type="button"
            color="error"
            onClick={() => onRemoveFromCart(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </StyledCardActions>
    </Card>
  );
};

export default CartItem;
