import React from 'react';
import './assets/css/style.css';
import { Route, Routes } from 'react-router-dom';
//import store from './redux/redux-store';
//import { compose } from "redux";
//import { Provider } from 'react-redux';
//import { withRouter } from './utils/withRouter';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingModalContainer from './components/BookingModalContainer';
import AdminContainer from './components/Admin/AdminContainer';
import ProfileContainer from './components/Admin/ProfileContainer';

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/*'
          element={ <Header/> } />
      </Routes>
      <Routes>
        <Route exact path='/'
          element = { <MainPage/> } />
        <Route path="/portfolio"
          element={<Portfolio />} />
        <Route path="/admin"
          element={<AdminContainer />} />
        <Route path='/clientProfile/:userId'
          element={ <ProfileContainer />} />
      </Routes>
      <Footer />
      <BookingModalContainer />
    </div>
  );
}

export default App;
