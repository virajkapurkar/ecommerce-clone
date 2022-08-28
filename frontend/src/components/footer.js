import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme();
theme.typography.body2 = {
  fontSize: 11.5,
};
function Footer(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <footer id="footer-primary">
          <Container
            style={{
              paddingBottom: "5vh",
              paddingTop: "10vh",
            }}
          >
            <Grid container>
              <Grid item xs={12} align="center">
                <Typography variant="body2" component="div" color="white">
                  All Rights Reserved &copy; ecommerce-clone
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default Footer;
