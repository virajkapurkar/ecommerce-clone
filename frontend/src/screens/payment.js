import React, { useState } from "react";
import Button from "@mui/material/Button";
import { savePaymentMethod } from "../actions/cartActions.js";
import BreadCrumbs from "../components/shared/breadCrumbs.js";
import { Typography, Card } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Payment(props) {
  const { shippingAddress } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  if (!shippingAddress) navigate("/shipping");

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <>
      <BreadCrumbs step={3} />
      <Card
        sx={{
          mx: "auto",
          marginTop: 7,
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
          Payment Info
        </Typography>
        <Typography
          variant="div"
          component="h5"
          sx={{
            fontWeight: 700,
            fontSize: 14,
            marginTop: 2,
          }}
        >
          Selct Payment Method
        </Typography>
        <form onSubmit={submitHandler}>
          <RadioGroup defaultValue="paypal">
            <FormControlLabel
              value="paypal"
              control={
                <Radio onChange={(e) => setPaymentMethod(e.target.value)} />
              }
              label="PayPal"
            />
            <FormControlLabel
              value="netbanking"
              control={
                <Radio onChange={(e) => setPaymentMethod(e.target.value)} />
              }
              label="NetBanking"
            />
            <FormControlLabel
              value="card"
              control={
                <Radio onChange={(e) => setPaymentMethod(e.target.value)} />
              }
              label="Credit or Debit Card"
            />
            <FormControlLabel
              value="cod"
              control={
                <Radio onChange={(e) => setPaymentMethod(e.target.value)} />
              }
              label="COD(Cash On Delivery)"
            />
          </RadioGroup>
          <Button
            fullWidth
            sx={{
              marginY: 1.5,
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

export default Payment;
