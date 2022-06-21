import React from "react";
import { Grid } from "@mui/material";
import products from "../products";
import Product from "../components/product";

function Home(props) {
  return (
    <>
      <Grid container spacing={2} marginTop={2}>
        {products.map((product) => (
          <Grid key={product._id} item md={3} xs={6}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
