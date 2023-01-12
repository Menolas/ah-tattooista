import React from 'react';
import classNames from "classnames";
import { connect } from 'react-redux/es/exports';
import { changeActiveStyle } from '../../redux/portfolio-reducer';

const TattooStyles = (props) => {
  debugger;

  const TattooStylesItem = (props) => {
    
    let itemClasses = classNames('tattoo-style__item', { 'active': props.activeStyle._id === props.item._id });
    
    return (
      <li
        className={itemClasses}
        onClick={() => {props.changeActiveStyle(props.item._id)}}
      >
        {props.item.value}
      </li>
    );
  }

  const tattooStylesArray = props.tattooStyles
    .map((item, i) => {
      return (
        <TattooStylesItem
          key={item._id}
          item={item}
          activeStyle={props.activeStyle}
          changeActiveStyle={props.changeActiveStyle}
        />
      );
  });

  return (
    <section className="tattoo-style page-block container">
      <ul className="tattoo-style__list list">
        {tattooStylesArray}
      </ul>
      <div className="tattoo-style__item-content">
        <h2 className="title title--secondary page-block__title tattoo-style__title">{props.activeStyle.value}</h2>
        <div className="tattoo-style__text">
          {props.activeStyle.description}
        </div>
      </div>
    </section>
  );
}


let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
    activeStyle: state.portfolio.activeStyle,
  }
}

export default connect(mapStateToProps, { changeActiveStyle })(TattooStyles);
