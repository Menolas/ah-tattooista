import React from 'react';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, minLengthCreator, maxLengthCreator } from '../../utils/validators';

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
            className="form booking__form form"
            method="POST"
          >
            <h3 className="form__title booking__form-title">
              FILL THE FORM AND WE WILL CONTACT YOU SOON
            </h3>
            <Field
              name="name"
              validate={composeValidators(required, minLengthCreator(2))}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <input {...input} placeholder="Full Name" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form__input-wrap booking__input-wrap">
              <label>Choose the way you want me to contact you</label>
              <Field
                name="contact"
                component="select"
                placeholder="Choose your contact"
              >
                <option value="email">email</option>
                <option value="phone">phone</option>
                <option value="whatsapp">whatsapp</option>
                <option value="messenger">messenger</option>
              </Field>
            </div>
            <Field
              name="contactValue"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <input {...input} placeholder="johndow@email.com" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              component="textarea"
              name="message"
              validate={composeValidators(required, minLengthCreator(10), maxLengthCreator(100))}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <textarea {...input} placeholder="Your message" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              type="checkbox"
              name="consent"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap form__input-wrap--checkbox">
                  <input {...input} id="consent" />
                  <label htmlFor="consent">
                    <span className="checkbox"></span>
                    CONSENT WITH PROCESSING OF MY PERSONAL DATA
                  </label>
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <button
              type="submit"
              className="btn btn--transparent form__submit-btn booking__submit-btn"
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
