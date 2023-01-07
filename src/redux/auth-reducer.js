import { authAPI } from '../api/authApi';
import { FORM_ERROR } from 'final-form';

const SET_ADMIN_DATA = 'SET_ADMIN_DATE';
const SET_AUTH = 'SET_AUTH';
const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';

let initialState = {
  userId: null,
  username: null,
  password: null,
  token: null,
  refreshToken: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_ADMIN_DATA:
      return {
        ...state,
        ...action.payload,
      };
    
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      };
    
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.refreshToken
      }
    
    default: return state;
  }
}

const setAdminData = (userId, username, password, token) => (
  {
    type: SET_ADMIN_DATA,
    payload: { userId, username, password, token }
  }
);

const setAuth = (isAuth) => (
  {
    type: SET_AUTH, isAuth
  }
);

const setRefreshToken = (refreshToken) => (
  {
    type: SET_REFRESH_TOKEN, refreshToken
  }
)

//thunks

export const getAuthAdminData = (token) => {
  //debugger;
  return (dispatch) => {
    authAPI.me(token).then(data => {
      if (data.data.auth === true) {
        dispatch(setAuth(true));
      }
    });
  }
}

export const login = (username, password) => {
  return (dispatch) => {

    authAPI.login(username, password)
      .then(data => {
        //debugger;
        if (data.data.user) {
          let { _id, username, password } = data.data.user;
          dispatch(setAdminData(_id, username, password, data.data.token));
          dispatch(getAuthAdminData(data.data.token));
          //dispatch(setRefreshToken(data.data.results.refreshToken));
        } else {
          console.log(data);
          
          //return { [FORM_ERROR]: message }
        }
      });
  }

}

export const logout = () => {
  //debugger;
  return (dispatch) => {
    
    dispatch(setAdminData(null, null, null, null));
    dispatch(setAuth(false));
    
  }
}

export default authReducer;
