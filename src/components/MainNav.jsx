import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNav =(props) => {
  let [mainNavMenuModal, setMainMenu] = useState(false);
  let [mainNavClasses, setMainNavClasses] = useState('main-nav');
    
  const mainNavList = [
    {
      text: 'Portfolio',
      url: './portfolio',
    },
    {
      text: 'Tattoo Artist',
      url: './portfolio',
    },
    {
      text: 'Studio Services',
      url: './portfolio',
    },
    {
      text: 'F.A.Q',
      url: './portfolio',
    },
    {
      text: 'Booking',
      url: './portfolio',
    },
    {
      text: 'Contacts',
      url: './portfolio',
    },
  ];

  const openMenu = () => {
    if (!mainNavMenuModal) {
      setMainMenu(true);
      setMainNavClasses('main-nav shown');
    } else {
      setMainMenu(false);
      setMainNavClasses('main-nav');
    }
  };

  const closeMenu = () => {
    setMainMenu(false);
    setMainNavClasses('main-nav');
  };

  const mainNavItems = mainNavList.map((item, i) => {
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
    <nav className={ mainNavClasses } >
      <div
        className="hamburger"
        onClick={ openMenu }>
        <span></span>
      </div>
      <ul className="list main-nav__list">
        { mainNavItems }
      </ul>
    </nav>
  );
  
};

export default MainNav;
