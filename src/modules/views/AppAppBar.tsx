import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor: "primary.main"}}>
        <Toolbar sx={{ justifyContent: 'space-between', marginY: '0.5em' }}>
          <Box
            component="img" 
            sx={{ 
              height: "100%",
              // width: 150
            }} 
            src="/logo.png"
            />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24, fontWeight: 500, textShadow: "1px 1px 4px #000000;" }}
          >
            {'Jason Hawi'}
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
