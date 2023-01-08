import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { getClientProfileThunkCreator, updateContactFieldThunkCreator } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from '../../../hoc/withRouter';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
  debugger;
  
  let [profileId, setProfileId] = useState(props.match.params.profileId);
  let [profile, setProfile] = useState(getClientProfileThunkCreator(props.match.params.profileId));

  return (
    <Profile
      {...props}
      profile={profile}
      updateContactFieldThunkCreator={props.updateContactFieldThunkCreator}
    />
  );
  
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    profile: state.profile.profile,
  };
};

export default compose(
  connect(mapStateToProps, { getClientProfileThunkCreator, updateContactFieldThunkCreator }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
