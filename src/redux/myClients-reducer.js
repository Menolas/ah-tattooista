import { clientsAPI } from '../api/clientApi';

const SET_MY_CLIENTS = 'SET_MY_CLIENTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_MY_CLIENTS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';
const ADD_TO_MY_CLIENTS = 'ADD_TO_MY_CLIENTS';
const DELETE_FROM_MY_CLIENTS = 'DELETE_FROM_MY_CLIENTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  myClients: [],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
}

const myClientsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case SET_MY_CLIENTS:
      return {
        ...state,
        myClients: action.myClients,
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    
    case SET_TOTAL_MY_CLIENTS_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    
    default: return state;
    
  }
}

export const setMyClients = (myClients) => (
  {
    type: SET_MY_CLIENTS,
    myClients: myClients,
  }
);

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
);

export const setMyClientsTotalCount = (count) => (
  {
    type: SET_TOTAL_MY_CLIENTS_COUNT,
    count: count,
  }
);

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  }
);

// thunks

export const getMyClientsThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    clientsAPI.getClients(pageSize, currentPage)
      .then(async (data) => {
        await dispatch(setIsFetching(false));
        await dispatch(setMyClients(data.resultClients));
        dispatch(setMyClientsTotalCount(data.totalCount));
      });
  }
}

export default myClientsReducer;
