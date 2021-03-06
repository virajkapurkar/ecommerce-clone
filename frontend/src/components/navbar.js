import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";

const theme = createTheme();
theme.typography.body2 = {
  fontSize: 11.5,
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/" style={linkStyle}>
                  {" "}
                  E-commerce App
                </NavLink>
              </Typography>

              <Button color="inherit">
                {" "}
                <ShoppingCartSharpIcon /> &nbsp;{" "}
                <Typography variant="body2" display="block">
                  <NavLink to="/cart" style={linkStyle}>
                    Cart
                  </NavLink>
                </Typography>
              </Button>
              <Button color="inherit">
                {" "}
                <PersonIcon /> &nbsp;{" "}
                <Typography variant="body2" display="block">
                  <NavLink to="/signin" style={linkStyle}>
                    Login
                  </NavLink>
                </Typography>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default Navbar;
