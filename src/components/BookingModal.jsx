import { connect } from 'react-redux/es/exports';
import BookingForm from './forms/BookingForm';
import { closeBookingModal } from '../redux/modal-reducer';

const BookingModal = (props) => {

  const closeBookingModal = (evt) => {
    evt.preventDefault();
    props.closeBookingModal();
  }

  if (props.bookingModal) {

    return (
      <div className="booking-modal modal-wrap">
        <div className="booking__form-modal-wrap">
          <button
            className="close-button booking-modal__close-btn"
            onClick={closeBookingModal}></button>
          <BookingForm consentId="consentModal" />
        </div>
      </div>
    );
  } else {
    return;
  }
}

let mapStateToProps = (state) => {
  return {
    bookingModal: state.modal.bookingModal,
  };
}

export default connect(mapStateToProps, {closeBookingModal})(BookingModal);
