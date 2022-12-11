import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/img/avatar.webp';
import Preloader from '../common/Preloader';

const Profile = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  
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
        <div className="client-profile">
          <span>{props.profile.id}</span>
          <div><img src={avatar} /></div>
          <div className="admin__card-name">
            <span>Name:&nbsp;</span>
            <span>{props.profile.fullName}</span>
          </div>
          <div>
            <span>Contacts:</span>
            <ul className="list admin__card-contacts-list">
              {
                
                <li>
                  <span>Phone:&nbsp;</span>
                  <span>{props.profile.phone}</span>
                </li>
              }
              {
               
                <li>
                  <span>Email:&nbsp;</span>
                  <span>{props.profile.email}</span>
                </li>
              }
              {
                
                <li>
                  <span>Instagram:&nbsp;</span>
                  <span>{props.profile.ista}</span>
                </li>
              }
              {
                
                <li>
                  <span>Whatsapp:&nbsp;</span>
                  <span>{props.profile.whatsapp}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
