import React from 'react';
import SocialNav from '../SocialNav';
import MainNav from '../MainNav';
import Logo from '../Logo';

const Header = (props) => {
  
  return (
    <header className="main-header container">
      <div className="main-header__top">
        <MainNav
          mainNav={props.mainNav}
          dispatch={props.dispatch}/>
        <div className="main-header__logo">
          <Logo />
          <span>Adelaine<br />Hobf</span>
        </div>
        <SocialNav />
      </div>
    </header>
  );
}

export default Header;
