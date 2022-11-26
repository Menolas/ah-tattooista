import React from 'react';

const BookingModal = () => {
  return (
    <div className="booking-modal">
      <form id="booking" className="booking__form" method="POST">
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
