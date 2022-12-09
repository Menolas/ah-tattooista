import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, setCurrentPageAC, setCustomersTotalCountAC } from '../../redux/customers-reducer';
import Customers from './Customers';

let mapStateToProps = (state) => {
  //debugger;
  return {
    customers: state.customers.customers,
    pageSize: state.customers.pageSize,
    totalCustomersCount: state.customers.totalCustomersCount,
    currentPage: state.customers.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (customerId) => {
      dispatch(changeCustomerStatusAC(customerId));
    },

    unChangeStatus: (customerId) => {
      dispatch(unChangeCustomerStatusAC(customerId));
    },

    setCustomers: (customers) => {
      dispatch(setCustomersAC(customers));
    },

    setCurrentPage: (currentPage) => {
      //debugger;
      dispatch(setCurrentPageAC(currentPage));
    },

    setCustomersTotalCount: (count) => {
      dispatch(setCustomersTotalCountAC(count));
    }
  };
};

const CustomersContainer = connect(mapStateToProps, mapDispatchToProps)(Customers);

export default CustomersContainer;
