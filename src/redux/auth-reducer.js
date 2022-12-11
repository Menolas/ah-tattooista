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
        ...action.data,
        isAuth: true,
      };
    
    default: return state;
  }
}

export const setAdminData = (login, email, password) => (
  {
    type: SET_ADMIN_DATA,
    data: { login, email, password },
  }
);

export default authReducer;
