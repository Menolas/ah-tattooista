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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/'
            element={<Header
              indexPage={true}
              mainNav={props.state.mainNav}
              dispatch={props.dispatch} />} />
          <Route path='/portfolio'
            element={<Header
              indexPage={false}
              mainNav={props.state.mainNav}
              dispatch={props.dispatch} />} />
        </Routes>
        <Routes>
          <Route exact path='/'
            element={<MainPage
              mainPage={props.state.mainPage}
              booking={props.state.booking}
              dispatch={props.dispatch} />} />
          <Route path='/portfolio'
            element={<Portfolio
              state={props.state.portfolio}
              dispatch={props.dispatch} />} />
        </Routes>
        <Footer />
        {
          props.state.booking.bookingModal &&
          <BookingModal
            booking={props.state.booking}
            dispatch={props.dispatch} />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
