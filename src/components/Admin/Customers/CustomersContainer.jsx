import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
  setCurrentPage,
  setIsFetching,
  toggleIsStatusChanging,
  getCustomersThunkCreator,
  changeCustomerStatusThunkCreator,
  unChangeCustomerStatusThunkCreator,
  deleteCustomerThunkCreator
} from '../../../redux/customers-reducer';
import {
  getCustomers,
  getPageSize,
  getTotalCount,
  getCurrentPage,
  getIsStatusChanging,
  getIsCustomerDeletingInProcess,
  getIsFetching
} from '../../../redux/customers-selectors';
import Customers from "./Customers";
import Preloader from '../../common/Preloader';



class CustomersAPIComponent extends React.Component {
  
  componentDidMount() {
    this.props.getCustomersThunkCreator(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getCustomersThunkCreator(this.props.pageSize, currentPage);
  }
  
  render = () => {

    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Customers
          customers={this.props.customers}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          isStatusChanging={this.props.isStatusChanging}
          changeCustomerStatusThunkCreator={this.props.changeCustomerStatusThunkCreator}
          unChangeCustomerStatusThunkCreator={this.props.unChangeCustomerStatusThunkCreator}
          isCustomerDeletingInProcess={this.props.isCustomerDeletingInProcess}
          deleteCustomerThunkCreator={this.props.deleteCustomerThunkCreator}
        />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    isAuth: state.auth.isAuth,
    customers: getCustomers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isStatusChanging: getIsStatusChanging(state),
    isCustomerDeletingInProcess: getIsCustomerDeletingInProcess(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    setIsFetching,
    toggleIsStatusChanging,
    getCustomersThunkCreator,
    changeCustomerStatusThunkCreator,
    unChangeCustomerStatusThunkCreator,
    deleteCustomerThunkCreator
  }),
  withAuthRedirect
)(CustomersAPIComponent);
