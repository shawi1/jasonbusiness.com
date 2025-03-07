import Container from "@mui/material/Container";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        my: 9,
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScNZqT36vO6_Y0fZmkHLRQD2zIPipbEjCyugPIEfDh2_Cbzdw/viewform?embedded=true"
        width="45%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={"ContactForm"}
        style={{ marginRight: "2.5%" }} // adds margin to seperate forms
      >
        Loading…
      </iframe>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc8olsr3CSE55ffyuY8WGFEE-lQof39-U8DH3qtJ4XugT_qBA/viewform?embedded=true"
        width="45%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={"Service Request Form"}
        style={{ marginRight: "2.5%" }}
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
