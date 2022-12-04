import React from 'react';
import MainOfferContainer from './MainOfferContainer';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import ServicesContainer from './ServicesContainer';
import FaqContainer from './FaqContainer';
import Booking from './Booking';
import Contacts from './Contacts';

const MainPage = (props) => {
  
  return (
    <main className="site-main">
      <MainOfferContainer />
      <PortfolioSlider />
      <About />
      <ServicesContainer />
      <FaqContainer />
      <Booking />
      <Contacts />
    </main>
  )
}

export default MainPage;
