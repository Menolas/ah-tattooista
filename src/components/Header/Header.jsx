import React from 'react';
import SocialNav from '../SocialNav';
import MainNav from '../MainNav';
import Logo from '../Logo';
import classNames from "classnames";

const Header = (props) => {
  //debugger;
  
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': !props.indexPage });
  
  return (
    <header className={headerClasses}>
      <Logo />
      <MainNav
        mainNav={props.mainNav}
        dispatch={props.dispatch}/>
      <SocialNav />
    </header>
  );
}

export default Header;
