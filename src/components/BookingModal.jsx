import React from 'react';
import BookingForm from './forms/BookingForm';

const BookingModal = (props) => {

  const closeBookingModal = (evt) => {
    evt.preventDefault();
    props.closeBookingModal();
  }

  if (props.bookingModal) {

    return (
      <div className="booking-modal modal-wrap">
        <div className="booking__form-modal-wrap">
          <button
            className="close-button booking-modal__close-btn"
            onClick={closeBookingModal}></button>
          <BookingForm />
        </div>
      </div>
    );
  } else {
    return;
  }
}

export default BookingModal;
