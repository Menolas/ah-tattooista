import React from 'react';
import { connect } from 'react-redux/es/exports';
import { getAuthAdminData } from '../../redux/auth-reducer';
import Header from './Header';
import { authAPI } from './../../api/authApi';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthAdminData();  
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getAuthAdminData })(HeaderContainer);
