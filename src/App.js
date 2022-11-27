import React from 'react';
import './assets/css/style.css';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
//import store from './redux/redux-store';
//import { compose } from "redux";
//import { Provider } from 'react-redux';
//import { withRouter } from './utils/withRouter';
import HeaderMain from './components/Header/HeaderMain';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = (props) => {
  //debugger;
  const activeStyle = props.state.activeStyle;
  const gallery = props.state.gallery;
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/'
            element={<HeaderMain />} />
          <Route path='/portfolio'
            element={<Header />} />
        </Routes>
        <Routes>
          <Route exact path='/'
            element={<MainPage
              faq={props.state.faq}
              services={props.state.services}
              dispatch={props.dispatch}
              bookingNameText={props.state.bookingNameText}
              bookingPhoneText={props.state.bookingPhoneText} />} />
          <Route path='/portfolio'
            element={<Portfolio tattooStyles={props.state.tattooStyles} activeStyle={activeStyle} gallery={gallery[activeStyle]} dispatch={props.dispatch} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
