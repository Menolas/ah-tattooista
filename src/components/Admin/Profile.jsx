import React from 'react';
import avatar from '../../assets/img/avatar.webp';
import yalkash from '../../assets/img/yalkash.jpg';
import Preloader from '../common/Preloader';

const Profile = (props) => {
  //debugger;
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className="client-profile">
      <div className="client-profile__header">
        <div className="client-profile__avatar"><img src={avatar} /></div>
        <div className="client-profile__details">
          <span className="client-profile__name">
            {props.profile.fullName}
          </span>
          <div className="client-profile__contacts">
            <ul className="list admin__card-contacts-list">
              <li>
                <span className="client-profile__contacts-title">Phone:&nbsp;</span>
                <span>{props.profile.phone}</span>
              </li>
              <li>
                <span className="client-profile__contacts-title">Email:&nbsp;</span>
                <span>{props.profile.email}</span>
              </li>
              <li>
                <span className="client-profile__contacts-title">Instagram:&nbsp;</span>
                <span>{props.profile.insta}</span>
              </li>
              <li>
                <span className="client-profile__contacts-title">Whatsapp:&nbsp;</span>
                <span>{props.profile.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="client-profile__gallery">
        <ul className="client-profile__gallery-list list">
          <li><img src={yalkash} /></li>
          <li><img src={yalkash} /></li>
          <li><img src={yalkash} /></li>
          <li><img src={yalkash} /></li>
        </ul>
      </div> 
    </div>
  );
};

export default Profile;
