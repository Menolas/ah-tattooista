import React from "react";
import { NavLink } from "react-router-dom";
import { showMainMenuActionCreator, hideMainMenuActionCreator } from "../redux/main-nav-reducer";
import classNames from "classnames";

const MainNav = (props) => {
  //debugger;
  let mainNavClasses = classNames('main-nav', { 'shown': props.mainNav.mainNavMenuModal });

  const openMenu = () => {
    let status = props.mainNav.mainNavMenuModal;
    let action = showMainMenuActionCreator(status);
    props.dispatch(action);
  };

  const closeMenu = () => {
    let action = hideMainMenuActionCreator();
    props.dispatch(action);
  }

  const mainNavItems = props.mainNav.mainNavList.map((item, i) => {
    return (
      <li className="main-nav__item" key={i}>
        <NavLink
          to={item.url}
          className="main-nav__link"
          onClick={closeMenu}>
          {item.text}
        </NavLink>
      </li>
    )
  });

  return (
    <nav className={mainNavClasses} >
      <div
        className="hamburger"
        onClick={openMenu}>
        <span></span>
      </div>
      <ul className="list main-nav__list">
        {mainNavItems}
      </ul>
    </nav>
  );
};

export default MainNav;
 