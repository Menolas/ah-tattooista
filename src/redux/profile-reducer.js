const SET_MY_CLIENT_PROFILE = 'SET_MY_CLIENT_PROFILE';

let initialState = {
  profile: null,
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_MY_CLIENT_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default: return state;
  }
}

export const setMyClientProfile = (profile) => (
  {
    type: SET_MY_CLIENT_PROFILE,
    profile: profile,
  }
);

export default profileReducer;
