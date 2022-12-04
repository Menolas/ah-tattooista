import React from 'react';
import MainOffer from './MainOffer';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import Services from './Services';
import FaqContainer from './FaqContainer';
import Booking from './Booking';
import Contacts from './Contacts';

const MainPage = (props) => {
  
  return (
    <main className="site-main">
      <MainOffer dispatch={ props.dispatch } />
      <PortfolioSlider />
      <About />
      <Services services={ props.mainPage.services } />
      <FaqContainer />
      <Booking
        store={ props.store } />
      <Contacts />
    </main>
  )
}

export default MainPage;
