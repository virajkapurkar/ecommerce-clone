import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Product from "../components/product";

function Home(props) {
  const [products, modifyProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/api/products");
      modifyProducts(data);
    };
    fetchProducts();
  }, []);

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
