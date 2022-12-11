const SET_ADMIN_DATA = 'SET_ADMIN_DATE';

let initialState = {
  name: null,
  email: null,
  password: null,
}

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_ADMIN_DATA:
      return {
        ...state,
        ...action.admin,
      };
    
    default: return state;
  }
}

const setAdminData = (admin) => (
  {
    type: SET_ADMIN_DATA,
    admin: admin,
  }
);

export default authReducer;
