import React from 'react';
import SocialNav from '../SocialNav';
import MainNavContainer from '../MainNavContainer';
import Logo from '../Logo';
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { withRouter } from '../../utils/withRouter';

const Header = (props) => {
  //debugger;
  let index = Object.keys(props.match.params)[0];
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': props.match.params[index] });
  
  return (
    <header className = { headerClasses }>
      <Logo />
      <MainNavContainer />
      <SocialNav />
      {props.isAuth && <NavLink to="/admin">Admin</NavLink>}
    </header>
  );
}

let WithUrlDataContainerComponent = withRouter(Header);

export default WithUrlDataContainerComponent;
