import React from 'react';
import { updateBookingNameTextActionCreator, updateBookingPhoneTextActionCreator, updateBookingConcentActionCreator } from '../redux/booking-reducer';

const BookingForm = (props) => {
  let concentClass = "not-checked";

  if (props.booking.bookingConcent) {
    concentClass = "checked";
  }

  const onNameFieldChange = (evt) => {
    let text = evt.target.value;
    let action = updateBookingNameTextActionCreator(text);
    props.dispatch(action);
  }

  const onPhoneFieldChange = (evt) => {
    let number = evt.target.value;
    let action = updateBookingPhoneTextActionCreator(number);
    props.dispatch(action);
  }

  const onConcentFieldChange = (evt) => {
    let checkbox = false;
    if (evt.target.checked) {
      checkbox = true;
    }
    let action = updateBookingConcentActionCreator(checkbox);
    props.dispatch(action);
  }

  const clickSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form id="booking" className="booking__form" method="POST">
      <h3 className="booking__form-title">
        FILL THE FORM AND WE WILL CONTACT YOU SOON
      </h3>
      <div className="booking__input-wrap">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={props.booking.bookingNameText}
          onChange={onNameFieldChange}
          required />
      </div>
      <div className="booking__input-wrap">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={props.booking.bookingPhoneText}
          onChange={onPhoneFieldChange}
          required />
      </div>
      <div className="booking__input-wrap">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          onChange={onConcentFieldChange}
          required />
        <label htmlFor="consent" className={concentClass}>
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
  );
}

export default BookingForm;
