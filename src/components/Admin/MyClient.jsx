import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/img/avatar.webp';

const MyClient = (props) => {
  
  return (
    <li className="admin__card">
      <NavLink to={ '/clientProfile/' + props.myClient.id } className="admin__card-link">
        <div className="admin__card-details">
          <span>{props.myClient.id}</span>
          <div><img src={avatar} /></div>
          <div className="admin__card-name">
            <span>Name:&nbsp;</span>
            <span>{props.myClient.fullName}</span>
          </div>
          <div>
            <span>Contacts:</span>
            <ul className="list admin__card-contacts-list">
              {
                props.myClient.phone &&
                <li>
                  <span>Phone:&nbsp;</span>
                  <span>{ props.myClient.phone }</span>
                </li>
              }
              {
                props.myClient.email &&
                <li>
                  <span>Email:&nbsp;</span>
                  <span>{ props.myClient.email }</span>
                </li>
              }
              {
                props.myClient.insta &&
                <li>
                  <span>Instagram:&nbsp;</span>
                  <span>{ props.myClient.insta }</span>
                </li>
              }
              {
                props.myClient.whatsapp &&
                <li>
                  <span>Whatsapp:&nbsp;</span>
                  <span>{ props.myClient.whatsapp }</span>
                </li>
              }
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
