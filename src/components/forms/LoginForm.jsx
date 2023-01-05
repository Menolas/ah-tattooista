import React from 'react';
import { connect } from 'react-redux/es/exports';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, minLengthCreator } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router';

const onSubmit = (e) => {
    //debugger;
  }

const validate = (e) => {
  //debugger;
}

const LoginForm = (props) => {

  if (props.isAuth) {
    return <Navigate to="/admin/customers" />
  }
  //debugger;
  return (
    <Form
      onSubmit={(values) => {
          props.login(values.username, values.password);
        }
      }
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
              name="username"
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
            {/* <Field
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
            </Field> */}
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

const mapStateToProps = (state) => (
  {
    isAuth: state.auth.isAuth
  }
)

export default connect(mapStateToProps, {login})(LoginForm);
