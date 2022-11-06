import Container from "@mui/material/Container";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScNZqT36vO6_Y0fZmkHLRQD2zIPipbEjCyugPIEfDh2_Cbzdw/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={"ContactForm"}
      >
        Loading…
      </iframe>
      {/* <Typography variant="subtitle1" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography> */}
    </Container>
  );
}

export default ProductSmokingHero;
