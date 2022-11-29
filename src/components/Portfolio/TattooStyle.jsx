import React from 'react';
import { changeActiveStyleActionCreator } from '../../redux/state';

const TattooStyle = (props) => {
  const activeStyle = props.activeStyle;
  const tattooStyles = props.tattooStyles;

  const handleStyleClick = (evt) => {
    let style = evt.target.getAttribute('data');
    props.dispatch(changeActiveStyleActionCreator(style));
  };

  const TattooStylesItem = (props) => {
    let itemClass = '';
    if (activeStyle === props.item) {
      itemClass = 'active';
    }
    return (
      <li className={"tattoo-style__item " + itemClass} data={props.item}>{props.item}</li>
    )
  }

  const getTattooStylesArray = () => {
    let i = 0;
    const array = Object.keys(tattooStyles).map(item => {
      i++;
      return (
        <TattooStylesItem item={item} key={i} />
      )
    });
    return array;
  };
  const tattooStylesArray = getTattooStylesArray();

  return (
    <section className="tattoo-style page-block container">
      <ul className="tattoo-style__list list" onClick={handleStyleClick}>
        {tattooStylesArray}
      </ul>
      <div className="tattoo-style__item-content">
        <h2 className="title title--secondary page-block__title tattoo-style__title">{activeStyle}</h2>
        <div className="tattoo-style__text">
          {tattooStyles[activeStyle]}
        </div>  
      </div>
    </section>
  )
}

export default TattooStyle;
