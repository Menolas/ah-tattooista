import { connect } from 'react-redux/es/exports';
import { setMyClientsAC, } from '../../redux/admin-reducer';
import MyClients from './MyClients';

let mapStateToProps = (state, props) => {
  return {
    myClients: state.admin.myClients,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setMyClients: (myClients) => {
      dispatch(setMyClientsAC(myClients));
    },
  };
};

const MyClientsContainer = connect(mapStateToProps, mapDispatchToProps)(MyClients);

export default MyClientsContainer;
