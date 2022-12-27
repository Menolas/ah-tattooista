import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setCurrentPage, setIsFetching, toggleIsStatusChanging, getCustomersThunkCreator, changeCustomerStatusThunkCreator, unChangeCustomerStatusThunkCreator, deleteCustomerThunkCreator } from '../../redux/customers-reducer';
import Customers from "./Customers";
import Preloader from './../common/Preloader';
import { Navigate } from "react-router-dom";

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

let AuthRedirectComponent = (props) => {
  if (!this.props.isAuth) return <Navigate to='/login' />
  return <CustomersAPIComponent {...props} />
}

let mapStateToProps = (state) => {
  //debugger;
  return {
    isAuth: state.auth.isAuth,
    customers: state.customers.customers,
    pageSize: state.customers.pageSize,
    totalCount: state.customers.totalCount,
    currentPage: state.customers.currentPage,
    isFetching: state.customers.isFetching,
    isStatusChanging: state.customers.isStatusChanging,
    isCustomerDeletingInProcess: state.customers.isCustomerDeletingInProcess
  };
};

const CustomersContainer = connect(mapStateToProps,
  {
    setCurrentPage,
    setIsFetching,
    toggleIsStatusChanging,
    getCustomersThunkCreator,
    changeCustomerStatusThunkCreator,
    unChangeCustomerStatusThunkCreator,
    deleteCustomerThunkCreator
  }
)(CustomersAPIComponent);

export default CustomersContainer;
