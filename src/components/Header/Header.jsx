import React from 'react';
import SocialNav from '../SocialNav';
import MainNavContainer from '../MainNavContainer';
import Logo from '../Logo';
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { withRouter } from '../../hoc/withRouter';
import Sprite from '../../assets/svg/sprite.svg';

const Header = (props) => {
  //debugger;
  let index = Object.keys(props.match.params)[0];
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': props.match.params[index] });
  
  return (
    <header className = { headerClasses }>
      <Logo />
      <MainNavContainer />
      <SocialNav />
      {props.isAuth &&
        <NavLink to="/admin/customers" className="main-header__admin-link">
          <svg><use href={`${Sprite}#admin`}></use></svg>
        </NavLink>
      }
    </header>
  );
}

export default withRouter(Header);
