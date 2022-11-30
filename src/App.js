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
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/'
            element={<HeaderMain
              dispatch={props.dispatch} />} />
          <Route path='/portfolio'
            element={<Header />} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
