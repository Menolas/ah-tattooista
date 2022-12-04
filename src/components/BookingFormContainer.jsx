import React from 'react';
import { updateBookingNameTextActionCreator, updateBookingPhoneTextActionCreator, updateBookingConcentActionCreator } from '../redux/booking-reducer';
import BookingForm from './BookingForm';
import StoreContext from '../StoreContext';

const BookingFormContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState();
          const onNameFieldChange = (text) => {
            let action = updateBookingNameTextActionCreator(text);
            store.dispatch(action);
          };

          const onPhoneFieldChange = (number) => {
            let action = updateBookingPhoneTextActionCreator(number);
            store.dispatch(action);
          };

          const onConcentFieldChange = (checkbox) => {
            let action = updateBookingConcentActionCreator(checkbox);
            store.dispatch(action);
          };

          return (
            <BookingForm
              booking={state.booking}
              onNameFieldChange={onNameFieldChange}
              onPhoneFieldChange={onPhoneFieldChange}
              onConcentFieldChange={onConcentFieldChange} />
          );
        }
      }
    </StoreContext.Consumer>
  );
}

export default BookingFormContainer;
