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
import Admin from './components/Admin/Admin';

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={ <Header
            indexPage={ true } /> } />
        <Route path='/portfolio'
          element={ <Header
            indexPage={ false } /> } />
      </Routes>
      <Routes>
        <Route exact path='/'
          element = { <MainPage/> } />
        <Route path="/portfolio"
          element={<Portfolio />} />
        <Route path="/admin"
          element={<Admin />} />
      </Routes>
      <Footer />
      <BookingModalContainer />
    </div>
  );
}

export default App;
