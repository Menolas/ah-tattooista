import React, {Component} from 'react';
import './assets/css/style.css';
import { connect } from 'react-redux/es/exports';
import { compose } from "redux";
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingModal from './components/BookingModal';
import Admin from './components/Admin/Admin';
import HeaderContainer from './components/Header/HeaderContainer';
import CustomersContainer from './components/Admin/Customers/CustomersContainer';
import MyClientsContainer from './components/Admin/Clients/MyClientsContainer';
import ProfileContainer from './components/Admin/ClientProfile/ProfileContainer';
import Login from './components/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import SuccessModal from './components/SuccessModal';

class App extends Component {

  componentDidMount() {
    //this.props.getAuthAdminData(this.props.token);
    this.props.initializeApp(this.props.token);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
  
    return (
      <div className="App">
        <Routes>
          <Route path='/*'
            element={<HeaderContainer />} />
        </Routes>
        <Routes>
          <Route exact path='/'
            element={<MainPage />} />
          <Route path="/portfolio"
            element={<Portfolio />} />
          <Route path={`/admin/`}
            element={<Admin />}>
            <Route path="/admin/customers"
              element={<CustomersContainer />} />
            <Route path="/admin/clients"
              element={<MyClientsContainer />} />
            <Route path={`/admin/profile/:profileId`}
              element={<ProfileContainer />} />
          </Route>
          <Route path='/login'
            element={<Login />} />
        </Routes>
        <Footer />
        <BookingModal />
        <SuccessModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //isAuth: state.auth.isAuth,
  //token: state.auth.token,
  initialized: state.app.initialized
});

export default compose(connect(mapStateToProps, {initializeApp}))(App);
