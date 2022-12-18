import React from 'react';
import { connect } from 'react-redux/es/exports';
import axios from 'axios';
import { setAdminData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://mockend.com/Menolas/ah-tattooista/logins/1`, { withCredentials: false })
      .then(response => {
        //debugger;
        if (response.data) {
          let { login, email, password } = response.data;
          this.props.setAdminData(login, email, password);
        }
      }
    );

    /* axios.get(`http://localhost:3000/`)
      .then((response) => {
        debugger;
        console.log(response); 
      }
    ); */
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAdminData })(HeaderContainer);
