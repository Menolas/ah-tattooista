import React from 'react';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, minLengthCreator } from '../../utils/validators';

const onSubmit = (e) => {
    //debugger;
  }

const validate = (e) => {
  //debugger;
}

const LoginForm = (props) => {
  //debugger;
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
            id="login"
            className="form"
            method="POST"
          >
            <h3 className="form__title">
              Login
            </h3>
            <Field
              name="login"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <label>Login</label>
                  <input {...input} type="text" placeholder="Admin" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="email"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <label>Email</label>
                  <input {...input} type="text" placeholder="admin@email.com" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <label>Password</label>
                  <input {...input} type="password" placeholder="xxxxxxxx" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button
              type="submit"
              className="btn btn--transparent form__submit-btn"
            >
              Submit
            </button>
          </form>
        )
      }}
    />
  )
};

export default LoginForm;
