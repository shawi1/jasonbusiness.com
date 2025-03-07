import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Box, Container, IconButton } from '@mui/material';

const SocialLinks = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.light',
        py: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <IconButton
          component="a"
          href="https://www.facebook.com/people/HAWI-Investments-LLC/100083047426544/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#3b5998', m: 1 }}
        >
          <FaFacebook size={30} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/hawi_investments/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E4405F', m: 1 }}
        >
          <FaInstagram size={30} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/jhawi/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0077B5', m: 1 }}
        >
          <FaLinkedin size={30} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.youtube.com/@hawiinvestments9442/featured"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FF0000', m: 1 }}  // YouTube red color
        >
          <FaYoutube size={30} />
        </IconButton>
      </Container>
    </Box>
  );
};

export default SocialLinks;