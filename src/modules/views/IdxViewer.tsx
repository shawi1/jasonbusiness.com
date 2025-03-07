import Box from '@mui/material/Box';
import Typography from '../components/Typography';

function IdxViewer() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        bgcolor: "primary.light",
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "center",
        mt: 10,
        mb: 15,
        p: 4,
      }}
    >
      <Typography variant="h4" marked="center" component="h2" fontWeight="300" sx={{ mb: 4 }}>
        Property Search
      </Typography>
      <Box
        component="iframe"
        src="https://link.flexmls.com/1tu6dsbokxq1,15"
        width="100%"
        height="650px"
        frameBorder="0"
        sx={{ maxWidth: "800px", border: 'none' }}
      />
    </Box>
  );
}

export default IdxViewer;