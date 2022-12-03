import React from 'react';
import MainOffer from './MainOffer';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Booking from './Booking';
import Contacts from './Contacts';

const MainPage = (props) => {
  //debugger;
  return (
    <main className="site-main">
      <MainOffer dispatch={ props.dispatch } />
      <PortfolioSlider />
      <About />
      <Services services={ props.mainPage.services } />
      <Faq
        faq={ props.mainPage.faq }
        faqActive={ props.mainPage.faqActive }
        dispatch={ props.dispatch } />
      <Booking
        store={ props.store } />
      <Contacts />
    </main>
  )
}

export default MainPage;
