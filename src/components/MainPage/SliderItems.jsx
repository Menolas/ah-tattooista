import React from 'react';
import { NavLink } from "react-router-dom";

const PortfolioSliderItem = (props) => {
  
  const handleStyleClick = (styleId) => {
    props.changeActiveStyle(styleId);
  };

  return (
    <li
      className="portfolio-slider__item"
      style={{ backgroundImage: 'url("gallery/' + props.item.wallPaper + '")' }}
      onClick={() => {handleStyleClick(props.item._id)}}
    >
      <NavLink
        to = "/portfolio"
        className="portfolio-slider__link"
      >
        <h3 className="portfolio-slider__item-title">
          {props.item.value}
        </h3>
      </NavLink>
    </li>
  );
};

const SliderItems = (props) => {
  const items = props.tattooStyles.map((item, i) => {
    return (
      <PortfolioSliderItem
        key={i}
        item={item}
        changeActiveStyle={props.changeActiveStyle}
      />
    );
  });

  return (
    <>
      {items}
    </>
  )
};
  
export default SliderItems;
