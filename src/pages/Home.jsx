import React, { Fragment } from 'react'
import HeroSection from '../components/Hero-Section/HeroSection'
import Offer from '../components/Offer/Offer';
import Updates from '../components/Updates/Updates';

const Home = () => {
  return (
    <Fragment>
        
        <HeroSection />
        <Offer />
        <Updates />
    </Fragment>
  );
}

export default Home;