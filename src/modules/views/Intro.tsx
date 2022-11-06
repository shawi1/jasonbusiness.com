import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Grid } from "@mui/material";

export default function Intro() {
  return (
    <Container>
      <Grid container sx={{ my: 10 }}>
        <Grid
          item
          xs={12}
          alignContent="center"
          sx={{
            mb: 5,
          }}
        >
          <Typography
            variant="h4"
            marked="center"
            align="center"
            fontWeight="300"
          >
            Meet Jason
          </Typography>
        </Grid>
        <Grid item justifyContent="center" xs={12} sm={4} md={6}>
          <img
            src="./headshot.jpg"
            alt="Jason Hawi Headshot"
            style={{
              maxHeight: "500px",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            my: { xs: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              bgcolor: "warning.light",
              height: "100%",
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                bgcolor: "warning.light",
                maxHeight: 500,
                px: { xs: 3, md: 6 },
              }}
            >
              <Typography variant="h5" gutterBottom align="center">
                The Agent for YOU
              </Typography>
              <Typography variant="body1" align="justify">
                A real estate agent with Keller Williams Realty Brevard serving
                Melbourne, FL and the surrounding neighborhoods, Jason provides
                home buyers and sellers with professional, responsive, and
                attentive service. Want an agent who will really listen to what
                you want in a home? Need an agent who knows how to effectively
                market your home so it sells? Give me a call! I'm eager to help
                and would love to talk to you.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
