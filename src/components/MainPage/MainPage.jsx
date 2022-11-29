import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Booking from './Booking';
import Contacts from './Contacts';
import BookingModal from '../BookingModal';

const MainPage = (props) => {
  return (
    <main className="site-main">
      <PortfolioSlider />
      <About />
      <Services services={props.services} />
      <Faq faq={props.faq} />
      <Booking
        bookingNameText={props.bookingNameText}
        bookingPhoneText={props.bookingPhoneText}
        dispatch={props.dispatch} />
      <Contacts />
      {
        props.bookingModal &&
        <BookingModal dispatch={props.dispatch} />
      }
    </main>
  )
}

export default MainPage;
