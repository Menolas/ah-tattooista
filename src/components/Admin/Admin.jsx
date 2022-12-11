import React from 'react';
import CustomersContainer from './CustomersContainer';
import MyClientsContainer from './MyClientsContainer';
import ProfileContainer from './ProfileContainer';

const Admin = (props) => {
  //debugger;

  return (
    <div className="admin container">
      <div className="admin__header">
        <div className="admin__view-btns">
          <button
            className="btn"
            onClick={props.showCustomers}
          >
            Customers
          </button>
          <button
            className="btn"
            onClick={props.showMyClients}
          >
            My Clients
          </button>
        </div>
      </div>
      <div className="">
        { props.isCustomers && <CustomersContainer /> }
        { props.isMyClients && <MyClientsContainer /> }
        { props.isMyClientProfile && <ProfileContainer /> }
      </div>
    </div>
  );
};

export default Admin;
