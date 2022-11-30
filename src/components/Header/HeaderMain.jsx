import React from 'react';
import SocialNav from '../SocialNav';
import MainNav from '../MainNav';
import MainOffer from './MainOffer';
import Logo from '../Logo';

const HeaderMain = (props) => {
  
  return (
    <header className="main-header main-header--index container">
      <div className="main-header__top">
        <Logo />
        <MainNav
          mainNavMenu={props.mainNavMenu}
          dispatch={props.dispatch} />
        <SocialNav />
      </div>
      <MainOffer dispatch={props.dispatch} />
    </header>
  );
}

export default HeaderMain;
