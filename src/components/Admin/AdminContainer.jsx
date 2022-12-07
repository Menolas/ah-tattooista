import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, setMyClientsAC, addToMyClientsAC, deleteFromMyClientsAC } from '../../redux/admin-reducer';
import Admin from './Admin';

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
      dispatch(setCustomersAC(customers));
    }
  };
};

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
