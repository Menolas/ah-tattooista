const SHOW_CUSTOMERS = 'SHOW_CUSTOMERS';
const SHOW_MY_CLIENTS = 'SHOW_MY_CLIENTS';
const SHOW_MY_CLIENT_PROFILE = 'SHOW_MY_CLIENT_PROFILE';

let initialState = {
  isCustomers: true,
  isMyClients: false,
  isMyClientProfile: false,
  profileId: null,
}

const adminReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case SHOW_CUSTOMERS:
      return {
        ...state,
        isMyClients: false,
        isCustomers: true,
        isMyClientProfile: false,
      };

    case SHOW_MY_CLIENTS:
      return {
        ...state,
        isMyClients: true,
        isCustomers: false,
        isMyClientProfile: false,
      };
    
    case SHOW_MY_CLIENT_PROFILE:
      return {
        ...state,
        isMyClientProfile: true,
        isMyClients: false,
        isCustomers: false,
        profileId: action.profileId,
      }
    
    default: return state;
    
  }
}

export const showCustomers = () => (
  {
    type: SHOW_CUSTOMERS,
  }
);

export const showMyClients = () => (
  {
    type: SHOW_MY_CLIENTS,
  }
);

export const showMyClientProfile = (profileId) => (
  {
    type: SHOW_MY_CLIENT_PROFILE,
    profileId: profileId,
  }
);
  


export default adminReducer;
