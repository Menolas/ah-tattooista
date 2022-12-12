import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setMyClientProfile } from '../../redux/profile-reducer';
import axios from 'axios';
import Profile from './Profile';
import { withRouter } from '../../utils/withRouter';

class ProfileContainer extends React.Component {
  
  componentDidMount() {

    let profileId = this.props.match.params.profileId;
    if (!profileId) {
      profileId = 2;
    } 

    axios.get(`/Menolas/ah-tattooista/clients/` + profileId)
      .then(response => {
        this.props.setMyClientProfile(response.data);
      });
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
    setMyClientProfile
  }
)(WithUrlDataContainerComponent);
