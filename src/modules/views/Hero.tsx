import * as React from 'react';
import Button from '../components/Button';
import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2888&q=80';

export default function Hero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marginBottom="10rem" fontWeight="300" sx={{textShadow: "2px 2px 4px #000000;"}}>
        Where Destiny Meets Realty
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="tel:3215866473"
        sx={{ minWidth: 100 }}
      >
        Call 321-586-6473
      </Button>
    </ProductHeroLayout>
  );
}
