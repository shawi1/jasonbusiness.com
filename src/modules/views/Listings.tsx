import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const image = {
  height: 300,
  my: 4,
};

const listing1 = "./listing3.jpg";
const listing2 = "./listing2.jpg";
const listing3 = "./listing4.jpg";

function Listings() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "primary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          fontWeight="300"
          sx={{ mb: 14 }}
        >
          Listings
        </Typography>
        <div>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={listing1}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  UNDISCLOSED ADDRESS
                </Typography>
                <Typography variant="subtitle1" align="center">
                  $7,500/mo
                </Typography>
                <Typography variant="subtitle1" align="center">
                  5 Bedrooms 3.5 Bathrooms
                </Typography>
                <Typography variant="subtitle1" align="center">
                  3,148 sqft
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={listing2}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  161 S Shepard Drive, Cocoa Beach, FL 32931
                </Typography>
                <Typography variant="subtitle1" align="center">
                  $719,000
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Lot/Land
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={listing3}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  211 Deauville Avenue Southeast, Palm Bay, FL
                </Typography>
                <Typography variant="subtitle1" align="center">
                  $389,900
                </Typography>
                <Typography variant="subtitle1" align="center">
                  4 Beds 2 Bathrooms
                </Typography>
                <Typography variant="subtitle1" align="center">
                  2,246 sqft
                </Typography>
                <a href="https://www.zillow.com/view-3d-home/bcf62e0c-32a0-454d-a300-ba57f70294f3?setAttribution=mls&wl=true&utm_source=dashboard">
                  <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    sx={{ mt: 2 }}  // Adjusted margin-top for spacing
                  >
                    3D Tour
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </div>
        <a href="https://jasonhawi.spacecoastmls.com/">
          <Button
            color="secondary"
            size="large"
            variant="contained"
            sx={{ mt: 8 }}
          >
            Click for More!
          </Button>
        </a>
      </Container>
    </Box>
  );
}

export default Listings;
