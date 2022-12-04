import { connect } from 'react-redux/es/exports';
import Services from './Services';

let mapStateToProps = (state) => {
  return {
    services: state.mainPage.services,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ServicesContainer = connect(mapStateToProps, mapDispatchToProps)(Services);

export default ServicesContainer;
