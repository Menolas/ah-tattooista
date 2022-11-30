import React from "react";
import { updateBookingNameTextActionCreator, updateBookingPhoneTextTextActionCreator } from '../../redux/booking-reducer';


const Booking = (props) => {
  const bookingNameText = props.booking.bookingNameText;
  const bookingPhoneText=props.booking.bookingPhoneText;
  const bookingModal=props.booking.bookingModal;

  const onNameFieldChange = (evt) => {
    let text = evt.target.value;
    let action = updateBookingNameTextActionCreator(text);
    props.dispatch(action);
  }

  const onPhoneFieldChange = (evt) => {
    let number = evt.target.value;
    let action = updateBookingPhoneTextTextActionCreator(number);
    props.dispatch(action);
  }

  const clickSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <section className="page-block booking container">
      <h2 className="page-block__title">Apply for booking</h2>
      <div className="booking__content">
        <form id="booking" className="booking__form" method="POST">
          <h3 className="booking__form-title">
            FILL THE FORM AND WE WILL CONTACT YOU SOON
          </h3>
          <div className="booking__input-wrap">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={props.bookingNameText}
              onChange={onNameFieldChange}
              required />
          </div>
          <div className="booking__input-wrap">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={props.bookingPhoneText}
              onChange={onPhoneFieldChange}
              required />
          </div>
          <div className="booking__input-wrap">
            <input id="consent" type="checkbox" name="consent" required />
            <label htmlFor="consent">
              <span className="checkbox"></span>
              CONSENT WITH PROCESSING OF MY PERSONAL DATA
            </label>
          </div>
          <button
            className="btn btn--transparent booking__submit-btn"
            type="submit"
            onClick={clickSubmit}>
            BOOK A CONSULTATION
          </button>
        </form>
        <div className="booking__img-wrap"></div>
      </div>
    </section>
  )
}

export default Booking;
