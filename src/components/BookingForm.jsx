import React from 'react';
import { Form, Field } from 'react-final-form';

const BookingForm = (props) => {

  return (
    <Form
      onSubmit={(values) => { console.log(values) }}
      render={renderProps => {

        const {
          handleSubmit
        } = renderProps;
        
        return (
          <form
            onSubmit={handleSubmit}
            id="booking"
            className="booking__form"
            method="POST">
            <h3 className="booking__form-title">
              FILL THE FORM AND WE WILL CONTACT YOU SOON
            </h3>
            <div className="booking__input-wrap">
              <Field
                component="input"
                name="name"
                placeholder="Full Name"
                required />
            </div>
            <div className="booking__input-wrap">
              <Field
                component="input"
                name="phone"
                placeholder="Phone Number"
                required />
            </div>
            <div className="booking__input-wrap">
              <Field
                component="textarea"
                name="message"
                placeholder="My message"
                required />
            </div>
            <div className="booking__input-wrap booking__input-wrap--concent">
              <Field
                component="input"
                type={'checkbox'}
                id="consent"
                name="consent"
                required />
              <label htmlFor="consent">
                <span className="checkbox"></span>
                CONSENT WITH PROCESSING OF MY PERSONAL DATA
              </label>
            </div>
            <button
              className="btn btn--transparent booking__submit-btn"
              type="submit"
            >
              BOOK A CONSULTATION
            </button>
          </form>
        )
      }}
    />
  );
}

export default BookingForm;
