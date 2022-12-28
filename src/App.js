import React from 'react';
import './assets/css/style.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingModalContainer from './components/BookingModalContainer';
import Admin from './components/Admin/Admin';
import HeaderContainer from './components/Header/HeaderContainer';
import CustomersContainer from './components/Admin/Customers/CustomersContainer';
import MyClientsContainer from './components/Admin/Clients/MyClientsContainer';
import ProfileContainer from './components/Admin/ClientProfile/ProfileContainer';
import Login from './components/Login';

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
      <BookingModalContainer />
    </div>
  );
}

export default App;
