import React from "react";
import Portfolio from './../Portfolio/Portfolio';

const PortfolioSlider = () => {
  return (
    <section className="portfolio-slider">
      <div className="portfolio-slider__container container">
        <div className="portfolio-slider__sidebar">
          <div>
            <h2 className="title title--secondary portfolio-slider__title">Neotradition</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">FineLine</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">BlackWork</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">Black&Gray</h2>
          </div>
        </div>
        <div className="portfolio-slider__main-slide main-slide">
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
        </div>
        <div className="controls">
          <button className="down-button">
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSlider;
