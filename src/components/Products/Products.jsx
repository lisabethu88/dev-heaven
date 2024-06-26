import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import { Toolbar, Content } from "./productsStyles";
import welcome from "../../assets/Untitled design (21).png";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import Loading from "../Loading";
import {
  keyboardsCategoryDescription,
  booksCategoryDescription,
  officeChairsCategoryDescription,
  rubberDucksCategoryDescription,
  beveragesCategoryDescription,
  productivityCategoryDescription,
} from "../../Constants";

const Products = ({
  keyboards,
  books,
  onAddToCart,
  rubberDucks,
  beverages,
  officeChairs,
  productivity,
  monitors,
  desks,
  computers,
}) => {
  const productsData = [
    {
      title: "Keyboards",
      description: keyboardsCategoryDescription,
      data: keyboards,
    },
    {
      title: "Books",
      description: booksCategoryDescription,
      data: books,
    },
    {
      title: "Rubber Ducks",
      description: rubberDucksCategoryDescription,
      data: rubberDucks,
    },
    {
      title: "Beverages",
      description: beveragesCategoryDescription,
      data: beverages,
    },
    {
      title: "Office Chairs",
      description: officeChairsCategoryDescription,
      data: officeChairs,
    },
    {
      title: "Productivity",
      description: productivityCategoryDescription,
      data: productivity,
    },
    {
      title: "Monitors",
      description: "High-quality monitors to enhance your workspace.",
      data: monitors,
    },
    {
      title: "PCs & Laptops",
      description: "Powerful PCs and laptops to fuel your coding journey.",
      data: computers,
    },
    {
      title: "Desks",
      description: "Ergonomic desks to create the perfect workspace.",
      data: desks,
    },
  ];
  return (
    <Content>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 2,
          backgroundColor: "#413b61",
          padding: 1,
          paddingBottom: 3,
          flexWrap: "wrap",
        }}
      >
        <img
          src={welcome}
          style={{ width: "100%", maxWidth: 300, height: "auto" }}
          alt="angel sitting at laptop with wings"
        />{" "}
        <Box padding={1}>
          <Typography
            variant="h2"
            color="#94a4fe"
            textAlign={"center"}
            fontFamily="Tiny5"
            textTransform="uppercase"
          >
            Welcome!
          </Typography>
          <Typography
            variant="body1"
            color="#e8eefe"
            textAlign={"center"}
            width="100%"
            maxWidth={600}
          >
            At Dev Heaven, we understand the unique needs of developers and the
            importance of having the right tools to fuel your creativity and
            productivity. That’s why we’ve curated a comprehensive selection of
            high-quality products tailored specifically for the tech-savvy
            community. From ergonomic office furniture to premium beverages, we
            have everything you need to create the perfect workspace and thrive
            in your coding journey.
          </Typography>
        </Box>
      </Box>

      <List>
        {productsData.map((productData) => (
          <ListItem
            key={productData.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              marginBottom: 5,
              borderRadius: 2,
              paddingBottom: 2,
            }}
          >
            <ListItemText
              primary={productData.title}
              primaryTypographyProps={{
                variant: "h4",
                fontFamily: "Tiny5",
                textTransform: "uppercase",
                color: "#413b61",
                letterSpacing: 1,
              }}
              secondary={productData.description}
            />

            {productData.data.length > 0 ? (
              <Grid
                container
                justifyContent="flex-start"
                spacing={4}
                marginTop={0}
              >
                {productData.data.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Loading />
            )}
          </ListItem>
        ))}
        {/*
        <Typography variant="h5">PCs & Laptops</Typography>{" "}
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5">Monitors</Typography>{" "}
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5">Headphones</Typography>{" "}
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>

      */}
      </List>
    </Content>
  );
};
export default Products;
