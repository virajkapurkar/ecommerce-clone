import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderActions.js";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/shared/breadCrumbs.js";
import { Typography, Card, Grid, Box, Link } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import Message from "../components/shared/alert.js";
import { create } from "@mui/material/styles/createTransitions.js";

function Placeorder(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { order, success, error } = useSelector((state) => state.orderCreate);
  const navigate = useNavigate();
  const imageStyle = {
    maxHeight: "130px",
  };
  //   const addDecimal = (num) => {
  //     return Math.random(num * 100).toFixed(2);
  //   };
  cart.itemsPrice = Number(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  ).toFixed(2);
  cart.shippingPrice = Number(cart.itemsPrice > 500 ? 0 : 100).toFixed(2);
  cart.totalPrice = Number(
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [navigate, success]);
  return (
    <>
      <BreadCrumbs step={4} />
      {error && <Message severity="error">{error}</Message>}
      <Card
        sx={{
          mx: "auto",
          marginTop: 3,
          paddingX: 4,
          paddingY: 2,
          display: "block",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="body1"
          component="h3"
          sx={{ fontSize: 28, marginBottom: 0 }}
        >
          Review Your Order
        </Typography>
        <Typography
          variant="div"
          component="h5"
          sx={{
            fontWeight: 700,
            fontSize: 12,
            marginTop: 0,
          }}
        >
          By placing your order, you agree to ecom's privacy notice and
          conditions of use.
        </Typography>
        <Grid
          container
          spacing={1}
          marginTop={2}
          justifyContent="space-between"
        >
          <Grid item md={8} xs={12} sx={{ marginTop: 1 }}>
            <Grid
              container
              spacing={1}
              justifyContent="space-between"
              sx={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: 3,
                padding: 1.2,
              }}
            >
              <Grid item md={6} xs={12}>
                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 15,
                    textTransform: "none",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: 1,
                  }}
                >
                  Shipping Address:
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "block",
                  }}
                >
                  {cart.shippingAddress.address}
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "block",
                  }}
                >
                  {cart.shippingAddress.city}
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "block",
                  }}
                >
                  {cart.shippingAddress.pincode}
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "block",
                    marginBottom: 1,
                  }}
                >
                  {cart.shippingAddress.country}
                </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 15,
                    textTransform: "none",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: 1,
                  }}
                >
                  Payment Method:
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "block",
                  }}
                >
                  {cart.paymentMethod}
                </Typography>
              </Grid>
            </Grid>
            {cart.cartItems.length === 0 ? (
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                sx={{ border: "1px solid #ddd", borderRadius: "4px" }}
              >
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
              </Grid>
            ) : (
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                sx={{ border: "1px solid #ddd", borderRadius: "4px" }}
              >
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  {cart.cartItems.map((item) => (
                    <div key={item.name}>
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
                              sx={{
                                fontSize: 15,
                                textTransform: "none",
                                fontWeight: 500,

                                marginTop: 3,
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Grid>
                          <Grid item sm={2} xs={4}>
                            <Typography
                              component="div"
                              variant="h5"
                              align="left"
                              marginTop={1}
                              sx={{
                                fontSize: 15,
                                textTransform: "none",
                                fontWeight: 500,
                                marginTop: 3,
                              }}
                            >
                              ₹{Number(item.price).toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item sm={2} xs={4}>
                            <Typography
                              component="div"
                              variant="h5"
                              align="left"
                              marginTop={1}
                              sx={{
                                fontSize: 15,
                                textTransform: "none",
                                fontWeight: 500,
                                marginTop: 3,
                              }}
                            >
                              Quantity: {item.qty}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Grid>
            )}
          </Grid>

          <Grid item md={3.75} xs={12} sx={{ marginTop: 0 }}>
            <Grid
              sx={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: 3,
                padding: 2,
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "block",
                  marginBottom: 3,
                  borderRadius: 1,
                  backgroundColor: "#f0c14b",
                  marginX: "auto",
                  "&:hover": { backgroundColor: "#e8b22a" },
                  padding: 1,
                }}
                variant="contained"
                size="small"
                disabled={cart.cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                <Typography
                  variant="h4"
                  color="black"
                  sx={{
                    fontSize: 15,
                    textTransform: "none",
                    fontWeight: 370,
                  }}
                >
                  Place your order
                </Typography>
              </Button>

              <Typography
                color="black"
                variant="h4"
                component="h5"
                display="block"
                sx={{
                  fontSize: 15,
                  textTransform: "none",
                  fontWeight: 500,
                  marginBottom: 1,
                }}
              >
                Order Summary
              </Typography>

              <Grid
                container
                justifyContent="space-between"
                sx={{ my: 0, padding: 0 }}
              >
                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  Items:
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  ₹{cart.itemsPrice}
                </Typography>
              </Grid>

              <Grid
                container
                justifyContent="space-between"
                sx={{ my: 0, padding: 0 }}
              >
                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  Delivery:
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  ₹{cart.shippingPrice}
                </Typography>
              </Grid>

              <Grid
                container
                justifyContent="space-between"
                sx={{ my: 0, padding: 0 }}
              >
                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  Total:
                </Typography>

                <Typography
                  color="black"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                  }}
                >
                  ₹{cart.totalPrice}
                </Typography>
              </Grid>

              <Divider sx={{ marginY: 1 }} />

              <Grid
                container
                justifyContent="space-between"
                sx={{ my: 0, padding: 0 }}
              >
                <Typography
                  color="#b12704"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 20,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                    fontWeight: 500,
                  }}
                >
                  Order Total:
                </Typography>

                <Typography
                  color="#b12704"
                  variant="h4"
                  component="h5"
                  sx={{
                    fontSize: 20,
                    textTransform: "none",
                    display: "inline",
                    my: 0.5,
                    fontWeight: 500,
                  }}
                >
                  ₹{cart.totalPrice}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Placeorder;
