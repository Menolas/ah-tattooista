import React from 'react';
import SocialNav from '../SocialNav';
import MainNavContainer from '../MainNavContainer';
import Logo from '../Logo';
import classNames from "classnames";

const Header = (props) => {
  //debugger;
  
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': !props.indexPage });
  
  return (
    <header className = { headerClasses }>
      <Logo />
      <MainNavContainer
        store = { props.store } />
      <SocialNav />
    </header>
  );
}

export default Header;
