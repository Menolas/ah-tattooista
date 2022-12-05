import { connect } from 'react-redux/es/exports';
import { closeBookingModalActionCreator } from '../redux/booking-reducer';
import BookingModal from './BookingModal';

let mapStateToProps = (state) => {
  return {};
}

let mapDispatchToProps = (dispatch) => {
  return {
    closeBookingModal: () => {
      dispatch(closeBookingModalActionCreator());
    },
  };
}

const BookingModalContainer = connect(mapStateToProps, mapDispatchToProps)(BookingModal);

export default BookingModalContainer;
