import React from 'react';
import CustomersContainer from './CustomersContainer';
import MyClientsContainer from './MyClientsContainer';
import ProfileContainer from './ProfileContainer';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Admin = (props) => {
  //debugger;

  return (
    <div className="admin container">
      <div className="admin__header">
        <div className="admin__view-btns">
          <NavLink to="/admin/customers" className="btn btn--light-bg">
            Customers
          </NavLink>
          <NavLink to="/admin/clients" className="btn btn--light-bg">
            My Clients
          </NavLink>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
