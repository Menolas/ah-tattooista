import React from 'react';
import avatar from '../../../assets/img/avatar.webp';
import yalkash from '../../../assets/img/yalkash.jpg';
import Preloader from '../../common/Preloader';
import ProfileContactFieldWithHooks from './ProfileContactFieldWithHooks';

const Profile = (props) => {
  //debugger;
  if (!props.profile) {
    return <Preloader />
  }

  const contacts = Object.keys(props.profile.contacts).map(contact => {
    return (
      <ProfileContactFieldWithHooks
        key={contact}
        clientId={props.profile._id}
        contacts={props.profile.contacts}
        contact={contact}
        updateContactFieldThunkCreator={props.updateContactFieldThunkCreator}
      />
    );
  });
  
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
              { contacts }
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

/* <li key={contact}>
    <span>{contact}:&nbsp;</span>
    <span>{props.profile.contacts[contact]}</span>
  </li> */

export default Profile;
