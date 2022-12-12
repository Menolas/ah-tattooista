import React from 'react';
import './assets/css/style.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingModalContainer from './components/BookingModalContainer';
import AdminContainer from './components/Admin/AdminContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import CustomersContainer from './components/Admin/CustomersContainer';
import MyClientsContainer from './components/Admin/MyClientsContainer';
import ProfileContainer from './components/Admin/ProfileContainer';

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/*'
          element={ <HeaderContainer /> } />
      </Routes>
      <Routes>
        <Route exact path='/'
          element = { <MainPage/> } />
        <Route path="/portfolio"
          element={<Portfolio />} />
        <Route path="/admin"
          element={<AdminContainer />}>
          <Route path="/admin/customers"
            element={<CustomersContainer />} />
          <Route path="/admin/clients"
            element={<MyClientsContainer />} />
          <Route path={`/admin/profile/:profileId`}
            element={<ProfileContainer />} />
        </Route>
      </Routes>
      <Footer />
      <BookingModalContainer />
    </div>
  );
}

export default App;
