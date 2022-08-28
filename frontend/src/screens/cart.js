import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions.js";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Message from "../components/shared/alert.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const imageStyle = {
  maxHeight: "130px",
};

function Cart(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOut = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <>
      <Grid marginTop={2} justifyContent="center" alignItems="center">
        <Grid item md={10} xs={12}>
          {cartItems.length === 0 ? (
            <Message severity="info" title="Your Ecommerce Cart is empty.">
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on our ecommerce homepage. Go back to{" "}
              <Link
                to="/"
                style={{
                  color: "	#1E90FF",
                  display: "inline",
                }}
              >
                home
              </Link>
            </Message>
          ) : (
            <>
              <Grid
                container
                spacing={1}
                marginTop={2}
                justifyContent="space-between"
              >
                <Grid item md={8} xs={12} sx={{ backgroundColor: "white" }}>
                  <Typography
                    sx={{ marginTop: 1, marginBottom: 1 }}
                    component="h2"
                    variant="h4"
                    align="left"
                    marginLeft={2}
                  >
                    Shopping Cart
                  </Typography>
                  <List
                    sx={{
                      width: "100%",
                    }}
                  >
                    {cartItems.map((item) => (
                      <div key={item.name}>
                        <Divider variant="middle" />
                        <ListItem alignItems="flex-start">
                          <Grid container spacing={1} sx={{ marginY: 2 }}>
                            <Grid item sm={3} xs={6}>
                              <img
                                src={item.image}
                                alt=""
                                align="center"
                                style={imageStyle}
                              ></img>
                            </Grid>
                            <Grid item sm={4} xs={6}>
                              <Typography
                                component="div"
                                variant="h5"
                                align="left"
                              >
                                <Link
                                  to="/"
                                  style={{
                                    color: "black ",
                                    display: "inline",
                                    textDecoration: "none",
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </Typography>
                            </Grid>
                            <Grid item sm={2} xs={4}>
                              <Typography
                                component="div"
                                variant="div"
                                align="left"
                                marginTop={1}
                              >
                                ₹{Number(item.price).toFixed(2)}
                              </Typography>
                            </Grid>
                            <Grid item sm={2} xs={4} marginTop={1}>
                              <InputLabel
                                sx={{ display: "inline" }}
                                id="qty-label"
                                align="right"
                              >
                                Qty:
                              </InputLabel>
                              <FormControl
                                size="small"
                                sx={{ display: "inline", marginX: 1 }}
                                align="right"
                              >
                                <NativeSelect
                                  labelId="qty-label"
                                  id="qty-val"
                                  value={item.qty}
                                  sx={{ height: 30 }}
                                  onChange={(e) =>
                                    dispatch(
                                      addToCart(
                                        item.product,
                                        Number(e.target.value)
                                      )
                                    )
                                  }
                                >
                                  {[...Array(item.countInStock).keys()]
                                    .filter((x) => x < 10)
                                    .map((x) => (
                                      <MenuItem key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </MenuItem>
                                    ))}
                                </NativeSelect>
                              </FormControl>
                            </Grid>
                            <Grid item sm={1} xs={4} marginTop={1}>
                              <Button
                                size="small"
                                color="error"
                                onClick={() => removeHandler(item.product)}
                                sx={{ padding: 0 }}
                              >
                                <DeleteIcon />
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </div>
                    ))}
                    <Divider variant="middle" />
                    <ListItem>
                      <Box
                        sx={{
                          marginTop: 1,
                          marginLeft: "auto",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="h6"
                          align="left"
                          sx={{
                            fontWeight: "light",
                            display: "inline",
                          }}
                        >
                          Subtotal (
                          {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                          Items): ₹{" "}
                        </Typography>
                        <Typography
                          component="div"
                          variant="h6"
                          align="left"
                          sx={{ display: "inline" }}
                        >
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}
                        </Typography>
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  item
                  md={3.5}
                  xs={12}
                  sx={{
                    height: "150px",
                    backgroundColor: "white",
                    marginTop: 0,
                  }}
                >
                  <Box sx={{ marginLeft: 2, fontSize: "small" }}>
                    <Typography variant="body3">
                      Your order is eligible for FREE Delivery. Select this
                      option at checkout.
                    </Typography>
                  </Box>

                  <Box sx={{ marginTop: 1, marginLeft: 2 }}>
                    <Typography
                      component="div"
                      variant="h6"
                      align="left"
                      sx={{
                        fontWeight: "light",
                        display: "inline",
                      }}
                    >
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                      Items): ₹{" "}
                    </Typography>
                    <Typography
                      component="div"
                      variant="h6"
                      align="left"
                      sx={{ display: "inline" }}
                    >
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      minWidth: 220,
                      display: "block",
                      marginY: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#FFD814",
                      marginX: "auto",
                    }}
                    variant="contained"
                    size="small"
                    disabled={cartItems.length === 0}
                    onClick={checkOut}
                  >
                    <Typography variant="div" color="black">
                      Proceed to Buy
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Cart;
