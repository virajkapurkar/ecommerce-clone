import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions.js";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BreadCrumbs from "../components/shared/breadCrumbs.js";

function Shipping(props) {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch code
    dispatch(
      saveShippingAddress({
        address,
        city,
        pincode,
        country,
      })
    );
    navigate("/payment");
  };

  return (
    <>
      <BreadCrumbs step={2} />
      <Card
        sx={{
          mx: "auto",
          my: 4,
          paddingX: 4,
          paddingY: 2,
          display: "block",
          backgroundColor: "white",
          maxWidth: 450,
        }}
      >
        <Typography
          variant="body1"
          component="h3"
          sx={{ fontSize: 28, marginBottom: 2 }}
        >
          Shipping Address
        </Typography>
        <form onSubmit={submitHandler}>
          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Address
          </Typography>
          <TextField
            fullWidth
            id="address"
            multiline
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Enter Address"
            rows={3}
            sx={{ marginTop: 1 }}
            required
          />

          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            City
          </Typography>
          <TextField
            fullWidth
            id="city"
            variant="outlined"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter City"
            sx={{ marginTop: 1 }}
            size="small"
            required
          />

          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Pin code
          </Typography>
          <TextField
            fullWidth
            id="pincode"
            variant="outlined"
            onChange={(e) => setPincode(e.target.value)}
            value={pincode}
            placeholder="Enter pincode"
            sx={{ marginTop: 1 }}
            size="small"
            required
          />

          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Country
          </Typography>
          <TextField
            fullWidth
            id="country"
            variant="outlined"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder="Enter country"
            sx={{ marginTop: 1 }}
            size="small"
            required
          />

          <Button
            fullWidth
            sx={{
              marginY: 3,
              padding: 1,
              backgroundColor: "#f0c14b",
              "&:hover": { backgroundColor: "#e8b22a" },
            }}
            variant="contained"
            size="small"
            type="submit"
          >
            <Typography
              color="black"
              variant="h4"
              component="h5"
              sx={{
                fontSize: 14,
                textTransform: "none",
              }}
            >
              Continue
            </Typography>
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Shipping;
