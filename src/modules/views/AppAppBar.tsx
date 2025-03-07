import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "primary.main" }}>
        <Toolbar sx={{ justifyContent: "space-between", marginY: "0.5em" }}>
          <Box
            component="img"
            sx={{
              height: "100%",
            }}
            src="/logo.png"
          />
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontSize: 24,
              fontWeight: 500,
              textShadow: "1px 1px 4px #000000;",
            }}
          >
            {"Jason Hawi"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;