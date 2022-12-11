import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setMyClientProfile } from '../../redux/profile-reducer';
import axios from 'axios';
import Profile from './Profile';
import { withRouter } from '../../utils/withRouter';

class ProfileContainer extends React.Component {
  
  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios.get(`https://mockend.com/Menolas/ah-tattooista/clients/` + userId)
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
