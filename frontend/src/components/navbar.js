import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import PersonIcon from "@mui/icons-material/Person";

function navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              E-commerce App
            </Typography>
            <Button color="inherit">
              {" "}
              <ShoppingCartSharpIcon /> cart
            </Button>
            <Button color="inherit">
              {" "}
              <PersonIcon />
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default navbar;
