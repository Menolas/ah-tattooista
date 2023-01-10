import React from 'react';
import classNames from "classnames";
import { connect } from 'react-redux/es/exports';
import { changeActiveStyle } from '../../redux/portfolio-reducer';

const TattooStyle = (props) => {
  const activeStyle = props.activeStyle;
  const activeStyleObject = props.tattooStyles.find(item => item.style === activeStyle);

  const handleStyleClick = (evt) => {
    let style = evt.target.getAttribute('data');
    props.changeActiveStyle(style);
  };

  const TattooStylesItem = (props) => {
    
    let itemClasses = classNames('tattoo-style__item', { 'active': activeStyle === props.item.style });
    
    return (
      <li className={itemClasses} data={props.item.style}>{props.item.writtenName}</li>
    );
  }

  const tattooStylesArray = props.tattooStyles
    .map((item, i) => {
      return (
        <TattooStylesItem item = { item } key={ i } />
      );
  });

  return (
    <section className="tattoo-style page-block container">
      <ul className="tattoo-style__list list" onClick={handleStyleClick}>
        {tattooStylesArray}
      </ul>
      <div className="tattoo-style__item-content">
        <h2 className="title title--secondary page-block__title tattoo-style__title">{activeStyleObject.writtenName}</h2>
        <div className="tattoo-style__text">
          {activeStyleObject.description}
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

export default connect(mapStateToProps, { changeActiveStyle })(TattooStyle);
