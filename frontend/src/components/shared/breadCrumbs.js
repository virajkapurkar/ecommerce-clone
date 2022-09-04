import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";
import { useNavigate } from "react-router-dom";

function BreadCrumbs({ step }) {
  return (
    <Stepper alternativeLabel>
      {step >= 1 ? (
        <Step active={step === 1} completed={step >= 2}>
          <Link href="/cart" sx={{ textDecoration: "none" }}>
            <StepButton>Cart</StepButton>
          </Link>
        </Step>
      ) : (
        <Step>
          <StepButton disabled>Cart</StepButton>
        </Step>
      )}

      {step >= 2 ? (
        <Step active={step === 2} completed={step >= 3}>
          <Link href="/shipping" sx={{ textDecoration: "none" }}>
            <StepButton>Shipping</StepButton>
          </Link>
        </Step>
      ) : (
        <Step>
          <StepButton disabled>Shipping</StepButton>
        </Step>
      )}

      {step >= 3 ? (
        <Step active={step === 3} completed={step >= 4}>
          <Link href="/payment" sx={{ textDecoration: "none" }}>
            <StepButton>Payment</StepButton>
          </Link>
        </Step>
      ) : (
        <Step>
          <StepButton disabled>Payment</StepButton>
        </Step>
      )}

      {step >= 4 ? (
        <Step active={step === 4}>
          <Link href="/placeorder" sx={{ textDecoration: "none" }}>
            <StepButton>Place Order</StepButton>
          </Link>
        </Step>
      ) : (
        <Step>
          <StepButton disabled>Place Order</StepButton>
        </Step>
      )}
    </Stepper>
  );
}

export default BreadCrumbs;
