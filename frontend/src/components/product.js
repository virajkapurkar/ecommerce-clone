import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { useState } from "react";

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  height: "52vh",
  margin: 1,
};

const imageStyle = {
  width: "15vw",
  height: "15vw",
};

const spanStyle = {
  backgroundColor: "#00b300",
  color: "white",
  padding: 3,
  borderRadius: "5px",
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
        <Link href="#">
          <CardMedia
            sx={{ m: "auto" }}
            style={imageStyle}
            component="img"
            image={item.product.image}
          />
        </Link>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            <Link
              underline="none"
              color="black"
              href="#"
              style={{
                color: isHovering ? "#2874f0" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.product.name}
            </Link>
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            component="div"
            align="center"
            sx={{ my: 1 }}
          >
            Rated <span style={spanStyle}>{item.product.rating}</span>
            ⭐️ by {item.product.numReviews} customers
          </Typography>

          <Typography gutterBottom variant="h6" component="div" align="center">
            ₹ {item.product.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Product;
