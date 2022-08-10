import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Spinner() {
  return (
    <>
      <Box
        style={{
          margin: "auto",
          display: "block",
        }}
      >
        <CircularProgress
          style={{
            display: "block",
            margin: "auto",
            width: "70px",
            height: "70px",
          }}
        />
      </Box>
    </>
  );
}

export default Spinner;
