import { connect } from 'react-redux/es/exports';
import { showBookingModalActionCreator } from '../../redux/booking-reducer';
import MainOffer from './MainOffer';

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

const MainOfferContainer = connect(mapStateToProps, mapDispatchToProps)(MainOffer);

export default MainOfferContainer;
