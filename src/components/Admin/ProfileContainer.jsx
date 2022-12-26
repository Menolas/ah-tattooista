import React from 'react';
import { connect } from 'react-redux/es/exports';
import { getClientProfileThunkCreator } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from '../../utils/withRouter';
import { clientsAPI } from './../../api/clientApi';

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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  {
    getClientProfileThunkCreator
  }
)(WithUrlDataContainerComponent);
