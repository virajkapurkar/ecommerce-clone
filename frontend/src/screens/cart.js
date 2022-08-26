import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions.js";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
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

const imageStyle = {
  maxHeight: "130px",
};

function Cart(props) {
  const { id } = useParams();
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
  return (
    <>
      <Container>
        <Grid
          container
          spacing={1}
          marginTop={2}
          justifyContent="center"
          alignItems="center"
        >
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
                <Typography
                  sx={{ marginY: 2 }}
                  component="h2"
                  variant="h4"
                  align="left"
                >
                  Shopping Cart
                </Typography>
                <Divider />
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  {cartItems.map((item) => (
                    <div key={item.name}>
                      <ListItem alignItems="flex-start">
                        <Grid container spacing={1} sx={{ marginY: 5 }}>
                          <Grid item xs={3}>
                            <img
                              src={item.image}
                              alt=""
                              align="center"
                              style={imageStyle}
                            ></img>
                          </Grid>
                          <Grid item xs={7}>
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
                          <Grid item xs={1}>
                            <Typography
                              component="div"
                              variant="div"
                              align="left"
                            >
                              ₹{item.price}
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <InputLabel sx={{ marginTop: 3 }} id="qty-label">
                              Qty:
                            </InputLabel>
                            <FormControl
                              size="small"
                              sx={{ width: 60 }}
                              align="left"
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
                        </Grid>
                      </ListItem>
                      <Divider />
                    </div>
                  ))}
                </List>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
