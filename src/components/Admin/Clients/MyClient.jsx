import React from 'react';
import avatar from '../../../assets/img/avatar.webp';
import { NavLink } from 'react-router-dom';

const MyClient = (props) => {
  //debugger;
  const contacts = Object.keys(props.myClient.contacts).map(contact => {
    if (props.myClient.contacts[contact]) {
      return (
        <li key={contact}>
          <span>{contact}:&nbsp;</span>
          <span>{props.myClient.contacts[contact]}</span>
        </li>
      );
    }
  });
  
  return (
    <li className="admin__card">
      <NavLink
        to={'/admin/profile/' + props.myClient._id}
        className="admin__card-link">
        <div className="admin__card-details">
          <span>{props.myClient._id}</span>
          <div><img src={avatar} /></div>
          <div className="admin__card-name">
            <span>Name:&nbsp;</span>
            <span>{props.myClient.fullName}</span>
          </div>
          <div>
            <span>Contacts:</span>
            <ul className="list admin__card-contacts-list">
              { contacts }
            </ul>
          </div>
        </div>
        <div className="admin__card-btns">
        </div>
      </NavLink>
    </li>
  );
}

export default MyClient;
