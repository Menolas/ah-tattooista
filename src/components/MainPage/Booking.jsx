import React from "react";
import BookingFormContainer from "../BookingFormContainer";


const Booking = (props) => {

  return (
    <section className = "page-block booking container">
      <h2 className = "page-block__title">Apply for booking</h2>
      <div className = "booking__content">
        <div className = "booking__form-page-wrap">
          <BookingFormContainer
            store = { props.store } />
        </div>
        <div className = "booking__img-wrap"></div>
      </div>
    </section>
  )
}

export default Booking;
