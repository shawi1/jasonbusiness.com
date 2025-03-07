import * as React from "react";
import Intro from "./modules/views/Intro";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import Hero from "./modules/views/Hero";
import Listings from "./modules/views/Listings";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import IdxViewer from "./modules/views/IdxViewer";
import SocialLinks from "./modules/views/SocialLinks";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <Intro />
      <Listings />
      <IdxViewer />
      <ProductSmokingHero />
      <SocialLinks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
