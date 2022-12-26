import { authAPI } from '../api/authApi';

const SET_ADMIN_DATA = 'SET_ADMIN_DATE';

let initialState = {
  login: null,
  email: null,
  password: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_ADMIN_DATA:
      return {
        ...state,
        isAuth: true,
      };
    
    default: return state;
  }
}

export const setAdminData = () => (
  {
    type: SET_ADMIN_DATA,
  }
);

//thunks

export const getAuthAdminData = () => {
  return (dispatch) => {
    authAPI.me().then(data => {
      if (data) {
        dispatch(setAdminData());
      }
    });
  }
}

export default authReducer;
