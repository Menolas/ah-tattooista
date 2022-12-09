import React from "react";
import { NavLink } from "react-router-dom";
import CustomersContainer from "./CustomersContainer";
import MyClientsContainer from "./MyClientsContainer";

const Admin = (props) => {
  //debugger;

  return (
    <div className="admin container">
      <div className="admin__header">
        <NavLink to="/" className="admin__back-link">
          Back to site
        </NavLink>
        <h2>Admin</h2>
      </div>
      <div className="">
        <div className="admin__view-btns">
          <button className="btn">Customers</button>
          <button className="btn">My Clients</button>
        </div>
        <CustomersContainer />
        {/* <MyClientsContainer /> */}
      </div>
    </div>
  );
};

export default Admin;
