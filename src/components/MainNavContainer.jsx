import { connect } from 'react-redux/es/exports';
import { showMainMenuActionCreator, hideMainMenuActionCreator } from "../redux/main-nav-reducer";
import MainNav from "./MainNav";

let mapStateToProps = (state) => {
  return {
    mainNav: state.mainNav,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    openMenu: (status) => {
      dispatch(showMainMenuActionCreator(status));
    },
    closeMenu: () => {
      dispatch(hideMainMenuActionCreator());
    },
  }
}

const MainNavContainer = connect(mapStateToProps, mapDispatchToProps)(MainNav);

export default MainNavContainer;
 