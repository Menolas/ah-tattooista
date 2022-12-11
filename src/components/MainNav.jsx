import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const MainNav = (props) => {
  let mainNavClasses = classNames('main-nav', { 'shown': props.mainNav.mainNavMenuModal });

  const openMenu = () => {
    let status = props.mainNav.mainNavMenuModal;
    props.openMenu(status);
  };

  const closeMenu = () => {
    props.closeMenu();
  }

  const mainNavItems = props.mainNav.mainNavList.map((item, i) => {
    return (
      <li className = "main-nav__item" key = { i }>
        <NavLink
          to = { item.url }
          className = "main-nav__link"
          onClick = { closeMenu }>
          { item.text }
        </NavLink>
      </li>
    )
  });

  return (
    <nav className = { mainNavClasses } >
      <div
        className = "hamburger"
        onClick = { openMenu }>
        <span></span>
      </div>
      <ul className = "list main-nav__list">
        {mainNavItems}
      </ul>
    </nav>
  );
};

export default MainNav;
