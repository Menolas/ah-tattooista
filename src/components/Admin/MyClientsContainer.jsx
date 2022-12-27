import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setCurrentPage, setIsFetching, getMyClientsThunkCreator } from '../../redux/myClients-reducer';
import MyClients from './MyClients';
import Preloader from './../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class MyClientsAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getMyClientsThunkCreator(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getMyClientsThunkCreator(currentPage, this.props.currentPage);
  }
  
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MyClients
          myClients={this.props.myClients}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  };
};
  
let mapStateToProps = (state) => {
  return {
    myClients: state.myClients.myClients,
    totalCount: state.myClients.totalCount,
    pageSize: state.myClients.pageSize,
    currentPage: state.myClients.currentPage,
    isFetching: state.myClients.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    setIsFetching,
    getMyClientsThunkCreator
  }),
  withAuthRedirect
)(MyClientsAPIComponent);
