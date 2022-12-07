const CUSTOMER_CONTACTED = 'CUSTOMER_CONTACTED';
const CUSTOMER_NOT_CONTACTED = 'CUSTOMER_NOT_CONTACTED';
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_MY_CLIENTS = 'SET_MY_CLIENTS';
const ADD_TO_MY_CLIENTS = 'ADD_TO_MY_CLIENTS';
const DELETE_FROM_MY_CLIENTS = 'DELETE_FROM_MY_CLIENTS';

//34aaecdc726bce2e9d164e0083cbd148
//https://ah-tattooista.bubbleapps.io/version-test/api/1.1/wf
//https://ah-tattooista.bubbleapps.io/version-test/api/1.1/obj



let initialState = {
  customers: [],
  myClients: [
    {
      id: "dhsdilfgywef",
      date: "",
      fullName: "Kikirikki",
      contacts: {
        facebook: "",
        insta: "",
        email: "",
        phone: "0047094070141",
      },
    },
  ],
}

const adminReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case CUSTOMER_CONTACTED:
      
      return {
        ...state,
        customers: state.customers.map(customer => {
          if (customer.id === action.customerId) {
            return { ...customer, status: true };
          }
          return customer;
        })
      };
    
    case CUSTOMER_NOT_CONTACTED:

      return {
        ...state,
        customers: state.customers.map(customer => {
          if (customer.id === action.customerId) {
            return { ...customer, status: false };
          }
          return customer;
        })
      };
    
    case SET_CUSTOMERS:
      return {
        ...state,
        customers: [...action.customers],
      };
    
    case SET_MY_CLIENTS:
      return {
        ...state,
        customers: [...action.customers],
      };
    
    case ADD_TO_MY_CLIENTS:
      return {
        ...state,
        myClients: [...state.myClients, action.myClient],
      };
    
    case DELETE_FROM_MY_CLIENTS:
      return {
        ...state,
        myClients:  [...state.myClients,],
      };
    
    default: return state;
    
  }
}

export const changeCustomerStatusAC = (customerId) => (
  {
    type: CUSTOMER_CONTACTED,
    customerId: customerId,
  }
);

export const unChangeCustomerStatusAC = (customerId) => (
  {
    type: CUSTOMER_NOT_CONTACTED,
    customerId: customerId,
  }
);

export const setCustomersAC = (customers) => (
  {
    type: SET_CUSTOMERS,
    customers: customers,
  }
);

export const setMyClientsAC = (myClients) => (
  {
    type: SET_MY_CLIENTS,
    myClients: myClients,
  }
);

export const addToMyClientsAC = (myClient) => (
  {
    type: ADD_TO_MY_CLIENTS,
    myClient: myClient,
  }
);

export const deleteFromMyClientsAC = (myClient) => (
  {
    type: DELETE_FROM_MY_CLIENTS,
    myClient: myClient,
  }
);

export default adminReducer;
