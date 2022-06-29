import React from "react";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function CustomRating(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          m: 0,
        }}
      >
        <Rating
          size="small"
          name="read-only"
          value={props.value ? props.value : 0}
          precision={0.1}
          readOnly
          sx={{ m: 0 }}
        />
        <Typography
          variant="body2"
          component="div"
          align="left"
          sx={{ marginLeft: 0.5 }}
        >
          ({props.num ? props.num : 0})
        </Typography>
      </Box>
    </>
  );
}

export default CustomRating;
