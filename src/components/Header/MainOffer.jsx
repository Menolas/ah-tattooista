import React from 'react';

const MainOffer = (props) => {
  return (
    <div className="main-offer">
      <div className="main-offer__content-wrap">
        <span className="main-offer__decorative-text">Tattoo Artist</span>
        <h1 className="title title--first main-offer__title">
          <span>Hobf</span>
          <span>Adelaine</span>
        </h1>
        <span className="main-offer__motto">Your philosophy on your skin</span>
      </div>
      <button className="btn btn--light-bg main-header__btn" type="submit">BOOK A CONSULTATION</button>
    </div>
  )
}

export default MainOffer;
