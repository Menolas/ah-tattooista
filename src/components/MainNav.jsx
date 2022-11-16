import React from 'react';

const MainNav = (props) => {

  //const menu = document.querySelector(".main-nav");

  const openMenu = (event) => {
    const menu = event.currentTarget;
    console.log(menu);
    menu.classList.toggle("shown");
  }

  return (
    <nav className="main-nav" onClick={openMenu}>
      <div className="hamburger">
        <span></span>
      </div>
      <ul className="list main-nav__list">
        <li className="main-nav__item">
          <a href="./portfolio" className="main-nav__link">Portfolio</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link">Tattoo Artist</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link">Studio Services</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link">F.A.Q</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link">Booking</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;