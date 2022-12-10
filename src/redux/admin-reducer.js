const SHOW_CUSTOMERS = 'SHOW_CUSTOMERS';
const SHOW_MY_CLIENTS = 'SHOW_MY_CLIENTS';

let initialState = {
  isCustomers: true,
  isMyClients: false,
}

const adminReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case SHOW_CUSTOMERS:
      return {
        ...state,
        isMyClients: false,
        isCustomers: true,
      }

    case SHOW_MY_CLIENTS:
      return {
        ...state,
        isMyClients: true,
        isCustomers: false,
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
  


export default adminReducer;
