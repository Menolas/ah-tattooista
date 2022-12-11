import React from 'react';
import { connect } from 'react-redux/es/exports';
import axios from 'axios';
import { setAdminData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://mockend.com/Menolas/ah-tattooista/logins/1`)
      .then(response => {
        if (response.data) {
          let { login, email, password } = response.data;
          this.props.setAdminData(login, email, password);
        }
      }
    );
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAdminData })(HeaderContainer);
