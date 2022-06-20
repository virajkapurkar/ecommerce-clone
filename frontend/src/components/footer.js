import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function footer(props) {
  return (
    <>
      <footer>
        <Container>
          <Grid container>
            <Grid item xs={12} align="center">
              All Rights Reserved &copy; ecommerce-clone
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}

export default footer;
