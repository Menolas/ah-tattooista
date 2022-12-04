import React from 'react';
import { closeBookingModalActionCreator } from '../redux/booking-reducer';
import BookingFormContainer from './BookingFormContainer';

const BookingModal = (props) => {

  const closeBookingModal = (evt) => {
    evt.preventDefault();
    props.dispatch(closeBookingModalActionCreator());
  }

  return (
    <div className = "booking-modal modal-wrap">
      <div className = "booking__form-modal-wrap">
        <button
          className = "close-button booking-modal__close-btn"
          onClick = { closeBookingModal }></button>
        <BookingFormContainer />
      </div>
    </div>
    
  );
}

export default BookingModal;
