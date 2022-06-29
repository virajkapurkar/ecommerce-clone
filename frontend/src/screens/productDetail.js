import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Container, Typography } from "@mui/material";
import CustomRating from "../components/rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const imageStyle = {
  maxWidth: "400px",
  maxHeight: "400px",
};
const theme = createTheme({
  palette: {
    yellow: createColor("#ffc34d"),
    slateBlack: createColor("#2b2b2b"),
  },
});

function ProductDetail(props) {
  const [product, modifyProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:8080/products/${id}`);
      modifyProduct(data);
    };
    fetchProduct();
  }, [id]);

  // const product = products.find((p) => p._id === id);
  //const notFound = "Product was not found";
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Link
            to="/"
            style={{
              color: "black",
              m: 0,
              textDecoration: "none",
            }}
          >
            <Button color="slateBlack" size="small">
              ⬅Go Back
            </Button>
          </Link>
          <Grid container spacing={1} marginTop={2}>
            <Grid item md={6} xs={12}>
              <img
                src={product.image}
                alt=""
                align="center"
                style={imageStyle}
              ></img>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography component="div" variant="h4" align="left">
                {product.name}
              </Typography>
              <Divider />
              <CustomRating value={product.rating} num={product.numReviews} />

              <Typography component="div" variant="h3" align="left" marginY={3}>
                ₹ {product.price}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                align="left"
                marginTop={3}
                color="green"
              >
                {product.countInStcok} items left!
              </Typography>
              <Button variant="contained" size="large" color="yellow">
                Add to cart
              </Button>
              <Typography
                component="div"
                variant="h6"
                align="left"
                color="gray"
                marginY={2}
              >
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default ProductDetail;
