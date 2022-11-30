import React from 'react';
import { closeBookingModalActionCreator } from '../redux/booking-reducer';

const BookingModal = (props) => {

  const closeBookingModal = (evt) => {
    evt.preventDefault();
    props.dispatch(closeBookingModalActionCreator());
  }

  return (
    <div className="booking-modal modal-wrap">
      <form id="booking" className="booking__form" method="POST">
        <button className="close-button booking-modal__close-btn" onClick={closeBookingModal}></button>
        <h3 className="booking__form-title">
          FILL THE FORM AND WE WILL CONTACT YOU SOON
        </h3>
        <div className="booking__input-wrap">
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div className="booking__input-wrap">
          <input type="text" name="phone" placeholder="Phone Number" required />
        </div>
        <div className="booking__input-wrap">
          <input id="consent" type="checkbox" name="consent" placeholder="Phone Number" required />
          <label htmlFor="consent">
            <span className="checkbox"></span>
            CONSENT WITH PROCESSING OF MY PERSONAL DATA
          </label>
        </div>
        <button className="btn btn--transparent booking__submit-btn" type="submit">BOOK A CONSULTATION</button>
      </form>
    </div>
  );
}

export default BookingModal;
