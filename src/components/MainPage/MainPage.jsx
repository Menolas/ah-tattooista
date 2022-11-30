import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Booking from './Booking';
import Contacts from './Contacts';
import BookingModal from '../BookingModal';

const MainPage = (props) => {
  //debugger;
  return (
    <main className="site-main">
      <PortfolioSlider />
      <About />
      <Services services={props.mainPage.services} />
      <Faq faq={props.mainPage.faq} />
      <Booking
        booking={props.booking }
        dispatch={props.dispatch} />
      <Contacts />
      {
        props.booking.bookingModal &&
        <BookingModal dispatch={props.dispatch} />
      }
    </main>
  )
}

export default MainPage;
