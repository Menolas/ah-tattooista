import React from 'react';
import SocialNav from '../SocialNav';
import MainNavContainer from '../MainNavContainer';
import Logo from '../Logo';
import classNames from "classnames";
import { withRouter } from '../../utils/withRouter';

const Header = (props) => {
  //debugger;
  let index = Object.keys(props.match.params)[0];
  console.log(props.match.params[index]);
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': props.match.params[index] });
  
  return (
    <header className = { headerClasses }>
      <Logo />
      <MainNavContainer />
      <SocialNav />
    </header>
  );
}

let WithUrlDataContainerComponent = withRouter(Header);

export default WithUrlDataContainerComponent;
