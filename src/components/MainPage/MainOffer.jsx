import React from 'react';
import { connect } from 'react-redux/es/exports';
import { showBookingModal } from '../../redux/modal-reducer';

const MainOffer = (props) => {

  const showBookConsultationModal = () => {
    props.showBookingModal();
  }

  return (
    <div className = "main-offer container">
      <div className = "main-offer__content-wrap">
        <span className = "main-offer__decorative-text">Tattoo Artist</span>
        <h1 className = "title title--first main-offer__title">
          <span>Hobf</span>
          <span>Adelaine</span>
        </h1>
        <span className = "main-offer__motto">Your philosophy on your skin</span>
      </div>
      <button
        className = "btn btn--light-bg main-header__btn"
        onClick = { showBookConsultationModal }>
        BOOK A CONSULTATION
      </button>
    </div>
  )
}

export default connect(null, { showBookingModal })(MainOffer);
