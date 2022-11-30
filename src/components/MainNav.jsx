import React from "react";
import { NavLink } from "react-router-dom";
import { showMainMenuActionCreator } from "../redux/mainPage-reducer";

const MainNav = (props) => {
  let mainNavClass = "";

  if (props.mainNavMenu) {
    mainNavClass = "shown";
  }

  const openMenu = () => {
    let status = props.mainNavMenu;
    let action = showMainMenuActionCreator(status);
    props.dispatch(action);
  }

  return (
    <nav className={"main-nav " + mainNavClass} >
      <div
        className="hamburger"
        onClick={openMenu}>
        <span></span>
      </div>
      <ul className="list main-nav__list">
        <li className="main-nav__item">
          <NavLink to="./portfolio" className="main-nav__link">Portfolio</NavLink>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Tattoo Artist</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Studio Services</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">F.A.Q</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Booking</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;