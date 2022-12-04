import React from 'react';
import './assets/css/style.css';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
//import store from './redux/redux-store';
//import { compose } from "redux";
//import { Provider } from 'react-redux';
//import { withRouter } from './utils/withRouter';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingModal from './components/BookingModal';

const App = (props) => {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={ <Header
            indexPage={ true }
            store={ props.store } /> } />
        <Route path='/portfolio'
          element={ <Header
            indexPage={ false }
            store={ props.store } /> } />
      </Routes>
      <Routes>
        <Route exact path='/'
          element = { <MainPage
            store = { props.store }
            mainPage = { props.state.mainPage }
            dispatch = { props.dispatch } /> } />
        <Route path = '/portfolio'
          element = { <Portfolio
            state = { props.state.portfolio }
            dispatch = { props.dispatch } /> } />
      </Routes>
      <Footer />
      {
        props.state.booking.bookingModal &&
        <BookingModal
          dispatch = { props.dispatch } />
      }
    </div>
  );
}

export default App;
