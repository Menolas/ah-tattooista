const SET_MY_CLIENTS = 'SET_MY_CLIENTS';
const ADD_TO_MY_CLIENTS = 'ADD_TO_MY_CLIENTS';
const DELETE_FROM_MY_CLIENTS = 'DELETE_FROM_MY_CLIENTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

/* "Client": {
    "fullName": { "regexp": "[A-Z][a-z]{5,10}" },
    "avatar": { "string": {} },
    "email": { "regexp": "[a-z]{5,10}@gmail.com" },
    "phone": { "int": { "min": 110010101, "max": 1000000000 } },
    "whatsapp": { "int": { "min": 110010101, "max": 1000000000 } },
    "insta": { "regexp": "@[a-z]{5,10}" },
    "createdAt": {
      "dateTime": {
        "min": "2022-01-01T00:00:00Z",
        "max": "2022-12-31T23:59:59Z"
      }
    }
  }
 */

let initialState = {
  myClients: [],
  customersList: true,
  clientsList: false,
  pageSize: 5,
  totalCustomersCount: 20,
  currentPage: 1,
}

const adminReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {
    
    case SET_MY_CLIENTS:
      return {
        ...state,
        myClients: action.myClients,
      };
    
    case ADD_TO_MY_CLIENTS:
      return {
        ...state,
        myClients: [...state.myClients, action.myClient],
      };
    
    case DELETE_FROM_MY_CLIENTS:
      return {
        ...state,
        //myClients:  [...state.myClients,],
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    
    default: return state;
    
  }
}

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

export const setCurrentPageAC = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
);

export default adminReducer;
