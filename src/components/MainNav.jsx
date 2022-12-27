import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

class MainNav extends React.Component {
  state = {
    mainNavMenuModal: false,
    mainNavList: [
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
    ]
  }

  mainNavClasses = classNames('main-nav', { 'shown': this.state.mainNavMenuModal });

  openMenu = () => {
    if (!this.state.mainNavMenuModal) {
      this.setState(
        { mainNavMenuModal: true }
      );
    } else {
      this.setState(
        { mainNavMenuModal: false }
      );
    }
    this.mainNavClasses = classNames('main-nav', { 'shown': this.state.mainNavMenuModal });
  };

  closeMenu = () => {
    this.setState(
      { mainNavMenuModal: false }
    );
    this.mainNavClasses = classNames('main-nav');
  }

  mainNavItems = this.state.mainNavList.map((item, i) => {
    return (
      <li className = "main-nav__item" key = { i }>
        <NavLink
          to = { item.url }
          className = "main-nav__link"
          onClick = { this.closeMenu }>
          { item.text }
        </NavLink>
      </li>
    )
  });
  
  render() {
    return (
      <nav className={ this.mainNavClasses } >
        <div
          className="hamburger"
          onClick={ this.openMenu.bind(this) }>
          <span></span>
        </div>
        <ul className="list main-nav__list">
          { this.mainNavItems }
        </ul>
      </nav>
    );
  }
};

export default MainNav;
