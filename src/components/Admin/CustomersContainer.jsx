import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, } from '../../redux/admin-reducer';
import Customers from './Customers';

let mapStateToProps = (state, props) => {
  return {
    customers: state.admin.customers,
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
      debugger;
      dispatch(setCustomersAC(customers));
    }
  };
};

const CustomersContainer = connect(mapStateToProps, mapDispatchToProps)(Customers);

export default CustomersContainer;
