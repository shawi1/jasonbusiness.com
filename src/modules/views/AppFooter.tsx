import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        JasonBusiness.com
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item>
                <Copyright />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  {"Icons made by "}
                  <Link
                    href="https://www.freepik.com"
                    rel="sponsored"
                    title="Freepik"
                  >
                    Freepik
                  </Link>
                  {" from "}
                  <Link
                    href="https://www.flaticon.com"
                    rel="sponsored"
                    title="Flaticon"
                  >
                    www.flaticon.com
                  </Link>
                  {" is licensed by "}
                  <Link
                    href="https://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC 3.0 BY
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
