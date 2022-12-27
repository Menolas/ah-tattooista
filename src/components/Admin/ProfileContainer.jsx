import React from 'react';
import { connect } from 'react-redux/es/exports';
import { getClientProfileThunkCreator } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    //debugger;
    let profileId = this.props.match.params.profileId;
    if (!profileId) {
      profileId = 2;
    } 

    this.props.getClientProfileThunkCreator(profileId);
  }
  
  render = () => {

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
      />
    );
  }
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    profile: state.profile.profile,
  };
};

export default compose(
  connect(mapStateToProps, {getClientProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
