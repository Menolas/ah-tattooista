const CUSTOMER_CONTACTED = 'CUSTOMER_CONTACTED';
const CUSTOMER_NOT_CONTACTED = 'CUSTOMER_NOT_CONTACTED';
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CUSTOMERS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';

let initialState = {
  customers: [],
  pageSize: 5,
  totalCustomersCount: 100,
  currentPage: 1,
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
      }
    
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

export const setCurrentPageAC = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
);

export const setCustomersTotalCountAC = (count) => (
  {
    type: SET_TOTAL_CUSTOMERS_COUNT,
    count: count,
  }
);

export default customersReducer;
