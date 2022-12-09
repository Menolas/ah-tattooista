import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, setCurrentPageAC, setCustomersTotalCountAC } from '../../redux/admin-reducer';
import Customers from './Customers';

let mapStateToProps = (state) => {
  //debugger;
  return {
    customers: state.admin.customers,
    pageSize: state.admin.pageSize,
    totalCustomersCount: state.admin.totalCustomersCount,
    currentPage: state.admin.currentPage,
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
