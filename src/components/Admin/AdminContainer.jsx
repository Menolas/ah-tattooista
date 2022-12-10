import { connect } from 'react-redux/es/exports';
import { showCustomers, showMyClients } from '../../redux/admin-reducer';
import Admin from './Admin';

let mapStateToProps = (state) => {
  
  return {
    isCustomers: state.admin.isCustomers,
    isMyClients: state.admin.isMyClients,
  };
};

const AdminContainer = connect(mapStateToProps,
  {
    showCustomers,
    showMyClients
  }
)(Admin);

export default AdminContainer;
