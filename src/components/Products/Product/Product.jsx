import React, { useState } from "react";
import { Typography, IconButton, CardContent, Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import {
  StyledCard,
  StyledCardActions,
  StyledDiv,
  StyledCardMedia,
} from "./productStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Product = ({ product, onAddToCart }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + "...";
  };

  const fullDescription = product.description;
  const truncatedDescription = truncateText(fullDescription, 75);
  const isTruncated = fullDescription.length > 75;

  return (
    <StyledCard>
      {<StyledCardMedia image={product.image.url} title={product.name} />}
      <CardContent>
        <StyledDiv>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </StyledDiv>
        <Typography
          dangerouslySetInnerHTML={{
            __html: showFullDescription
              ? fullDescription
              : truncatedDescription,
          }}
          variant="body2"
          color="textSecondary"
        />
        {isTruncated && !showFullDescription && (
          <Button
            onClick={toggleDescription}
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
            Read more
            <ExpandMoreIcon />
          </Button>
        )}
        {showFullDescription && (
          <Button
            onClick={toggleDescription}
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
            Show less
            <ExpandLessIcon />
          </Button>
        )}
      </CardContent>
      <StyledCardActions disableSpacing>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Product;
