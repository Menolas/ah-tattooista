import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = (e) => {
    //debugger;
  }

const validate = (e) => {
  //debugger;
}

const LoginForm = (props) => {
  debugger;
  return (
    <Form
      onSubmit={(values) => { console.log(values) }}
      render={renderProps => {

        const {
          handleSubmit
        } = renderProps;

        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="#login">Login</label>
              <Field id="login" name="login" component="input" />
            </div>
            <div>
              <label htmlFor="#email">Email</label>
              <Field id="email" name="email" component="input" />
            </div>
            <div>
              <label htmlFor="#password">Password</label>
              <Field id="password" name="password" component="input" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )
      }}
    />
  )
};

export default LoginForm;
