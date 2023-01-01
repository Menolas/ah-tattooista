import React from "react";
import BookingForm from "../forms/BookingForm";


const Booking = (props) => {

  return (
    <section className = "page-block booking container">
      <h2 className = "page-block__title">Apply for booking</h2>
      <div className = "booking__content">
        <div className = "booking__form-page-wrap">
          <BookingForm />
        </div>
        <div className = "booking__img-wrap"></div>
      </div>
    </section>
  )
}

export default Booking;
