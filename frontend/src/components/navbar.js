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

const theme = createTheme();
theme.typography.body2 = {
  fontSize: 11.5,
};

function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                E-commerce App
              </Typography>
              <Button color="inherit">
                {" "}
                <ShoppingCartSharpIcon /> &nbsp;{" "}
                <Typography variant="body2" display="block">
                  cart
                </Typography>
              </Button>
              <Button color="inherit">
                {" "}
                <PersonIcon /> &nbsp;{" "}
                <Typography variant="body2" display="block">
                  Login
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
