import React from 'react';
import { connect } from 'react-redux/es/exports';
import { getAuthAdminData, logout } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  
  componentDidMount() {
    //debugger;
    this.props.getAuthAdminData(this.props.token);  
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  token: state.auth.token
});

export default connect(mapStateToProps, { getAuthAdminData, logout })(HeaderContainer);
