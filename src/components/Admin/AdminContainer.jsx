import { connect } from 'react-redux/es/exports';
import { showCustomers, showMyClients, showMyClientProfile } from '../../redux/admin-reducer';
import Admin from './Admin';

let mapStateToProps = (state) => {
  
  return {
    isCustomers: state.admin.isCustomers,
    isMyClients: state.admin.isMyClients,
    isMyClientProfile: state.admin.isMyClientProfile,
    profileId: state.admin.profileId,
  };
};

const AdminContainer = connect(mapStateToProps,
  {
    showCustomers,
    showMyClients,
    showMyClientProfile,
  }
)(Admin);

export default AdminContainer;
