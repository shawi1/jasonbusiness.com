import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import TextField from '../components/TextField';
import { TheaterComedySharp } from '@mui/icons-material';

export default function Intro() {
  return (
    <Container component="section" sx={{ my: 10 }}>
      <Grid 
        container
        direction="column"
        alignItems="center"
        sx={{
          mb: 10
        }}>
        <Typography variant="h4" marked="center" align="center" fontWeight="300" sx={{}}>
          Meet Jason
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: "warning.light",
              py: 8,
              px: 3,
            }}
          >
            <Box onSubmit={() => console.log("hi")} sx={{ maxWidth: 600 }}>
              <Typography variant="h4" gutterBottom>
                The Agent for YOU
              </Typography>
              <Typography fontSize={17}>
                A real estate agent with Keller Williams Realty
                Brevard serving Melbourne, FL and the surrounding neighborhoods, Jason provides
                home buyers and sellers with professional, responsive, and attentive service.
                Want an agent who will really listen to what you want in a home? Need an agent
                who knows how to effectively market your home so it sells? Give me a call! I'm
                eager to help and would love to talk to you.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1616587896595-51352538155b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              maxwidth: "100px",
              height: '100%'
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
