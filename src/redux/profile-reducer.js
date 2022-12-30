import { clientsAPI } from '../api/clientApi';

const SET_MY_CLIENT_PROFILE = 'SET_MY_CLIENT_PROFILE';
const SET_CONTACT_FIELD_VALUE = 'SET_CONTACT_FIELD_VALUE';

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
    
    case SET_CONTACT_FIELD_VALUE:
      return {
        ...state,
        profile: action.profile
      }
    
    default: return state;
  }
}

const setMyClientProfile = (profile) => (
  {
    type: SET_MY_CLIENT_PROFILE,
    profile: profile,
  }
);

const setContactFieldValue = (profile) => (
  {
    type: SET_CONTACT_FIELD_VALUE,
    profile: profile
  }
)

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

export const updateContactFieldThunkCreator = (
  clientId,
  contactTitle,
  contactFieldValue) => {

  return (dispatch) => {
    clientsAPI.updateContactField(clientId, contactTitle, contactFieldValue)
      .then((data) => {
        if (data) {
          dispatch(setContactFieldValue(data));
        }
      });
  }
}

export default profileReducer;
