import React, { useEffect } from "react";
import { getOrderDetails } from "../actions/orderActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../components/shared/spinner.js";
import Message from "../components/shared/alert.js";
import { Typography, Card, Grid, Box, Link } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";

function Order(props) {
  const params = useParams();
  const orderId = params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, getOrderDetails, orderId]);

  const imageStyle = {
    maxHeight: "130px",
  };
  return loading ? (
    <Spinner />
  ) : error ? (
    <Message severity="error">{error}</Message>
  ) : (
    <>
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
          Order: {order._id}
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
                  {order.user.name} {`(${order.user.email})`}
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
                  {order.shippingAddress.address}
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
                  {order.shippingAddress.city}
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
                  {order.shippingAddress.pincode}
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
                  {order.shippingAddress.country}
                </Typography>

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
                  Delivery Status:
                </Typography>

                {order.isDelivered ? (
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
                    Delivered ✔️
                  </Typography>
                ) : (
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
                    In Transit...⏳
                  </Typography>
                )}
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
                    marginBottom: 2,
                  }}
                >
                  {order.paymentMethod}
                </Typography>

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
                  Payment Status:
                </Typography>

                {order.isPaid ? (
                  <Typography
                    color="#2ace15"
                    variant="h4"
                    component="h5"
                    sx={{
                      fontSize: 14,
                      textTransform: "none",
                      display: "block",
                      marginBottom: 2,
                    }}
                  >
                    Paid
                  </Typography>
                ) : (
                  <Typography
                    color="#b12704"
                    variant="h4"
                    component="h5"
                    sx={{
                      fontSize: 14,
                      textTransform: "none",
                      display: "block",
                      marginBottom: 2,
                    }}
                  >
                    Not Paid
                  </Typography>
                )}
              </Grid>
            </Grid>
            {order.orderItems.length === 0 ? (
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                sx={{ border: "1px solid #ddd", borderRadius: "4px" }}
              >
                <Message severity="info" title="Your Ecommerce Cart is empty.">
                  Invalid Order. Go back to{" "}
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
                  {order.orderItems.map((item) => (
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
                  ₹{order.itemsPrice}
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
                  ₹{order.shippingPrice}
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
                  ₹{order.totalPrice}
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
                  ₹{order.totalPrice}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Order;
