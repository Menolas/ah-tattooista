import { clientsAPI } from '../api/clientApi';

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

// thunks

export const getClientProfileThunkCreator = (clientId) => {
  return (dispatch) => {
    clientsAPI.getClientProfile(clientId)
      .then((data) => {
        if (data) {
          dispatch(setMyClientProfile(data));
        }
      });
  }
}

export default profileReducer;
