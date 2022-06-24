import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "./rating";

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  height: "270px",
  width: "250px",
  margin: 1,
};

const imageStyle = {
  width: "100px",
  height: "100px",
};

const spanStyle1 = {
  fontSize: 15,
  fontFamily: "Segoe",
};

function Product(item) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <>
      <Card style={cardStyle}>
        <Link to={`/${item.product._id}`}>
          <CardMedia
            sx={{ m: "auto" }}
            style={imageStyle}
            component="img"
            image={item.product.image}
          />
        </Link>

        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="left"
            sx={{ m: 0 }}
          >
            <Link
              to={`/${item.product._id}`}
              style={{
                color: isHovering ? "#2874f0" : "black",
                m: 0,
                textDecoration: "none",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.product.name}
            </Link>
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="left"
            color="#8c8c8c"
            sx={{ m: 0 }}
          >
            {item.product.brand}
          </Typography>

          <Typography gutterBottom variant="h5" component="div" align="left">
            <span style={spanStyle1}>₹</span> {item.product.price}
            {""}
            <span style={spanStyle1}> 00</span>
          </Typography>

          <Rating value={item.product.rating} num={item.product.numReviews} />
        </CardContent>
      </Card>
    </>
  );
}

export default Product;
