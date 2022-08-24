import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
import CustomRating from "../components/rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../actions/productActions.js";
import Spinner from "../components/shared/spinner.js";
import Message from "../components/shared/alert.js";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/Select";

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
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const cartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  // const product = products.find((p) => p._id === id);
  //const notFound = "Product was not found";
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message severity={"error"}>{error}</Message>
      ) : (
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

                <Typography
                  component="div"
                  variant="h3"
                  align="left"
                  marginY={3}
                >
                  ₹ {product.price}
                </Typography>
                <Typography
                  component="div"
                  variant="h6"
                  align="left"
                  color="gray"
                  marginY={2}
                >
                  {product.description}
                </Typography>
                {product.countInStock > 0 ? (
                  <Typography
                    component="div"
                    variant="body2"
                    align="left"
                    marginTop={3}
                    color="green"
                  >
                    In Stock!
                  </Typography>
                ) : (
                  <Typography
                    component="div"
                    variant="body2"
                    align="left"
                    marginTop={3}
                    color="red"
                  >
                    Out of Stock!
                  </Typography>
                )}

                {product.countInStock > 0 && (
                  <>
                    <InputLabel sx={{ marginTop: 3 }} id="qty-label">
                      Qty:
                    </InputLabel>
                    <FormControl size="small" sx={{ width: 60 }} align="left">
                      <NativeSelect
                        labelId="qty-label"
                        id="qty-val"
                        value={qty}
                        sx={{ height: 30 }}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()]
                          .filter((x) => x < 10)
                          .map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                      </NativeSelect>
                    </FormControl>
                  </>
                )}

                <Button
                  sx={{
                    minWidth: 220,
                    display: "block",
                    marginY: 5,
                    borderRadius: 4,
                  }}
                  variant="contained"
                  size="small"
                  color="yellow"
                  onClick={cartHandler}
                >
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default ProductDetail;
