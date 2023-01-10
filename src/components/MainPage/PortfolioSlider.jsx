import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux/es/exports';
import { changeActiveStyle } from "../../redux/portfolio-reducer";

const PortfolioSlider = (props) => {

  const handleStyleClick = (evt) => {
    let style = evt.target.getAttribute('data');
    props.changeActiveStyle(style);
  };

  const PortfolioSliderItem = (props) => {
    
    return (
      <li
        className="portfolio-slider__item"
        style={{ backgroundImage: 'url("gallery/' + props.item.img + '")' }}>
        <NavLink
          to = "/portfolio"
          className = "portfolio-slider__link"
          data={props.item.style}>
          <h3 className="portfolio-slider__item-title">
            {props.item.writtenName}
          </h3>
        </NavLink>
      </li>
    );
  };

  const sliderItems = props.tattooStyles.map((item, i) => {
    return (
      <PortfolioSliderItem item={item} key={i} />
    )
  });

  return (
    <section className="page-block portfolio-slider container">
      <h2 className="page-block__title">Portfolio</h2>
      <div className="handlers__elements portfolio-slider__handlers">
        <span className="handlers__left-arrow"></span>
        <span className="handlers__right-arrow"></span>
      </div>
      <div className="handlers portfolio-slider__list-wrap">
        <ul
          className="portfolio-slider__list"
          onClick={handleStyleClick}>
          { sliderItems }
        </ul>
      </div>
    </section>
  );
}


let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
  };
};

const PortfolioSliderContainer = connect(mapStateToProps, {changeActiveStyle})(PortfolioSlider);

export default PortfolioSliderContainer;
