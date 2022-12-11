import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setMyClientProfile } from '../../redux/profile-reducer';
import axios from 'axios';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`https://mockend.com/Menolas/ah-tattooista/clients/2`)
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

export default connect(mapStateToProps,
  {
    setMyClientProfile
  }
)(ProfileContainer);
