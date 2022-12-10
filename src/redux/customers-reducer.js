const CUSTOMER_CONTACTED = 'CUSTOMER_CONTACTED';
const CUSTOMER_NOT_CONTACTED = 'CUSTOMER_NOT_CONTACTED';
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CUSTOMERS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  customers: [],
  pageSize: 5,
  totalCustomersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const customersReducer = (state = initialState, action) => {

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
        totalCustomersCount: action.count,
      };
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    
    default: return state;
    
  }
}

export const changeCustomerStatus = (customerId) => (
  {
    type: CUSTOMER_CONTACTED,
    customerId: customerId,
  }
);

export const unChangeCustomerStatus = (customerId) => (
  {
    type: CUSTOMER_NOT_CONTACTED,
    customerId: customerId,
  }
);

export const setCustomers = (customers) => (
  {
    type: SET_CUSTOMERS,
    customers: customers,
  }
);

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
);

export const setCustomersTotalCount = (count) => (
  {
    type: SET_TOTAL_CUSTOMERS_COUNT,
    count: count,
  }
);

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  }
);

export default customersReducer;
