import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Product from "../components/product";
import { fetchProducts } from "../actions/productActions.js";

function Home(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h2>LOADING......</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Grid container spacing={2} marginTop={2}>
          {products.map((product) => (
            <Grid key={product._id} item md={3} xs={6}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Home;
