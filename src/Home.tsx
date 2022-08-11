import * as React from 'react';
import Intro from './modules/views/Intro';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import ProductValues from './modules/views/ProductValues';
import Listings from './modules/views/Listings';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <Intro />
      <Listings />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
