const CUSTOMER_CONTACTED = 'CUSTOMER_CONTACTED';
const CUSTOMER_NOT_CONTACTED = 'CUSTOMER_NOT_CONTACTED';
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CUSTOMERS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS = 'TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS';

let initialState = {
  customers: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isStatusChanging: [],
}

const customersReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case CUSTOMER_CONTACTED:
      //debugger;
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
      //debugger;
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

export const setIsStatusChanging = (isFetching, customerId) => (
  {
    type: TOGGLE_IS_STATUS_CHANGING_IN_PROGRESS, isFetching, customerId
  }
);

export default customersReducer;
