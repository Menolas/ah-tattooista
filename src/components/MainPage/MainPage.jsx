import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import Portfolio from './Portfolio';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Booking from './Booking';
import Contacts from './Contacts';

const MainPage = () => {
  return (
    <main className="site-main">
      <PortfolioSlider />
      <Portfolio />
      <About />
      <Services />
      <Faq />
      <Booking />
      <Contacts />
    </main>
  )
}

export default MainPage;
