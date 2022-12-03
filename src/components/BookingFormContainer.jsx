import React from 'react';
import { updateBookingNameTextActionCreator, updateBookingPhoneTextActionCreator, updateBookingConcentActionCreator } from '../redux/booking-reducer';
import BookingForm from './BookingForm';

const BookingFormContainer = (props) => {

  let state = props.store.getState();

  const onNameFieldChange = (text) => {
    let action = updateBookingNameTextActionCreator(text);
    props.store.dispatch(action);
  }

  const onPhoneFieldChange = (number) => {
    let action = updateBookingPhoneTextActionCreator(number);
    props.store.dispatch(action);
  }

  const onConcentFieldChange = (checkbox) => {
    let action = updateBookingConcentActionCreator(checkbox);
    props.store.dispatch(action);
  }

  return (
    <BookingForm 
      booking = { state.booking }
      onNameFieldChange = { onNameFieldChange }
      onPhoneFieldChange = { onPhoneFieldChange }
      onConcentFieldChange = { onConcentFieldChange } />
  );
}

export default BookingFormContainer;
