import { connect } from 'react-redux/es/exports';
import { showBookingModalActionCreator } from '../../redux/booking-reducer';
import Advertisement from './Advertisement';

let mapStateToProps = (state) => {
  return {};
}

let mapDispatchToProps = (dispatch) => {
  return {
    showBookConsultationModal: () => {
      dispatch(showBookingModalActionCreator());
    },
  };
}

const AdvertisementContainer = connect(mapStateToProps, mapDispatchToProps)(Advertisement);

export default AdvertisementContainer;
