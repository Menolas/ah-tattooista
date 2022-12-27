import { connect } from 'react-redux/es/exports';
import { updateBookingNameTextActionCreator, updateBookingPhoneTextActionCreator, updateBookingConcentActionCreator } from '../redux/booking-reducer';
import BookingForm from './BookingForm';

let mapStateToProps = (state) => {
  return {
    booking: state.booking,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onNameFieldChange: (text) => {
      dispatch(updateBookingNameTextActionCreator(text));
    },
    onPhoneFieldChange: (number) => {
      dispatch(updateBookingPhoneTextActionCreator(number));
    },
    onConcentFieldChange: (checkbox) => {
      dispatch(updateBookingConcentActionCreator(checkbox));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
