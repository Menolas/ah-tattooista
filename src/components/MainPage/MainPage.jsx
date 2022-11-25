import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import PortfolioSlider1 from './PortfolioSlider1';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Booking from './Booking';
import Contacts from './Contacts';

const MainPage = (props) => {
  return (
    <main className="site-main">
      <PortfolioSlider />
      <PortfolioSlider1 />
      <About />
      <Services services={props.services} />
      <Faq faq={props.faq} />
      <Booking />
      <Contacts />
    </main>
  )
}

export default MainPage;
