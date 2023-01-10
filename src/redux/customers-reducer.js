import { customersAPI } from '../api/customerApi';
import { showSuccessModal } from './modal-reducer';

const CUSTOMER_CONTACTED = 'CUSTOMER_CONTACTED';
const CUSTOMER_NOT_CONTACTED = 'CUSTOMER_NOT_CONTACTED';
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CUSTOMERS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS = 'TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS';
const TOGGLE_IS_CUSTOMER_DELETING_IN_PROCESS = 'TOGGLE_IS_CUSTOMER_DELETING_IN_PROCESS';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

let initialState = {
  customers: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isStatusChanging: [],
  isCustomerDeletingInProcess: [],
}

const customersReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case CUSTOMER_CONTACTED:
      //debugger;
      return {
        ...state,
        customers: state.customers.map(customer => {
          if (customer._id === action.customerId) {
            return { ...customer, status: true };
          }
          return customer;
        })
      };
    
    case CUSTOMER_NOT_CONTACTED:
      //debugger;
      return {
        ...state,
        customers: state.customers.map(customer => {
          if (customer._id === action.customerId) {
            return { ...customer, status: false };
          }
          return customer;
        })
      };
    
    case SET_CUSTOMERS:
      
      return {
        ...state,
        customers: action.customers,
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    
    case SET_TOTAL_CUSTOMERS_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    
    case TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS:
      return {
        ...state,
        isStatusChanging: action.isFetching
          ? [...state.isStatusChanging, action.customerId]
          : state.isStatusChanging.filter(id => id !== action.customerId)
      }
    
    case TOGGLE_IS_CUSTOMER_DELETING_IN_PROCESS:
      return {
        ...state,
        isCustomerDeletingInProcess: action.isFetching
          ? [...state.isCustomerDeletingInProcess, action.customerId]
          : state.isCustomerDeletingInProcess.filter(id => id !== action.customerId)   
      }
    
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(id => id !== action.customerId)
      }
    
    default: return state;
    
  }
}

export const changeCustomerStatus = (customerId) => (
  {
    type: CUSTOMER_CONTACTED, customerId,
  }
);

export const unChangeCustomerStatus = (customerId) => (
  {
    type: CUSTOMER_NOT_CONTACTED, customerId,
  }
);

export const setCustomers = (customers) => (
  {
    type: SET_CUSTOMERS, customers,
  }
);

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE, currentPage,
  }
);

export const setCustomersTotalCount = (count) => (
  {
    type: SET_TOTAL_CUSTOMERS_COUNT, count,
  }
);

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching,
  }
);

export const toggleIsStatusChanging = (isFetching, customerId) => (
  {
    type: TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS, isFetching, customerId
  }
);

export const toggleIsCustomerDeletingInProcess = (isFetching, customerId) => (
  {
    type: TOGGLE_IS_CUSTOMER_DELETING_IN_PROCESS, isFetching, customerId
  }
)

export const deleteCustomer = (customerId) => (
  {
    type: DELETE_CUSTOMER, customerId
  }
);

// thunks

export const getCustomersThunkCreator = (pageSize, currentPage) => async(dispatch) => {
  dispatch(setIsFetching(true));
  try {
    let response = await customersAPI.getCustomers(pageSize, currentPage);
    dispatch(setIsFetching(false));
    dispatch(setCustomers(response.resultCustomers));
    dispatch(setCustomersTotalCount(response.totalCount));
  } catch (e) {
    console.log(e);
  }
}

export const changeCustomerStatusThunkCreator = (customerId) => async(dispatch) => {
  dispatch(toggleIsStatusChanging(true, customerId));
  
  try {
    let response = await customersAPI.contactCustomer(customerId);
    if (response) {
      dispatch(changeCustomerStatus(customerId));
      dispatch(toggleIsStatusChanging(false, customerId))
    }
  } catch (e) {
    console.log(e);
  }
}

export const unChangeCustomerStatusThunkCreator = (customerId) => async (dispatch) => {
  dispatch(toggleIsStatusChanging(true, customerId));
  try {
    let response = await customersAPI.unContactCustomer(customerId);
    if (response) {
      dispatch(unChangeCustomerStatus(customerId));
      dispatch(toggleIsStatusChanging(false, customerId))
    }
  } catch (e) {
    console.log(e);
  }
}

export const deleteCustomerThunkCreator = (customerId, pageSize, currentPage) => async (dispatch) => {
  dispatch(toggleIsCustomerDeletingInProcess(true, customerId));

  try {
    let response = await customersAPI.deleteCustomer(customerId);
    if (response.message === "Customer Deleted") {
      await dispatch(deleteCustomer(customerId));
      await dispatch(toggleIsCustomerDeletingInProcess(false, customerId));
      await dispatch(getCustomersThunkCreator(pageSize, currentPage));
    }
  } catch (e) {
    console.log(e);
  }
}

export const addCustomer = (
  name,
  contact,
  contactValue,
  message
) => async (dispatch) => {
  //debugger;
  try {
    let response = await customersAPI.addCustomer(
      name,
      contact,
      contactValue,
      message);
    if (response) {
      dispatch(showSuccessModal());
    }
  } catch (e) {
    console.log(e);
  }

}

export default customersReducer;
