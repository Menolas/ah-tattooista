import React from "react";
import { showMainMenuActionCreator, hideMainMenuActionCreator } from "../redux/main-nav-reducer";
import MainNav from "./MainNav";

const MainNavContainer = (props) => {
  //debugger;

  let state = props.store.getState();

  const openMenu = (status) => {
    let action = showMainMenuActionCreator(status);
    props.store.dispatch(action);
  };

  const closeMenu = () => {
    let action = hideMainMenuActionCreator();
    props.store.dispatch(action);
  }

  return (
    <MainNav
      mainNav = { state.mainNav }
      openMenu = { openMenu }
      closeMenu = { closeMenu } />
  );
};

export default MainNavContainer;
 