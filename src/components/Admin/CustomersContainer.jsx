import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setCurrentPage, setIsFetching, toggleIsStatusChanging, getCustomersThunkCreator, changeCustomerStatusThunkCreator, unChangeCustomerStatusThunkCreator } from '../../redux/customers-reducer';
import Customers from "./Customers";
import Preloader from './../common/Preloader';

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
        />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    customers: state.customers.customers,
    pageSize: state.customers.pageSize,
    totalCount: state.customers.totalCount,
    currentPage: state.customers.currentPage,
    isFetching: state.customers.isFetching,
    isStatusChanging: state.customers.isStatusChanging,
  };
};

const CustomersContainer = connect(mapStateToProps,
  {
    setCurrentPage,
    setIsFetching,
    toggleIsStatusChanging,
    getCustomersThunkCreator,
    changeCustomerStatusThunkCreator,
    unChangeCustomerStatusThunkCreator
  }
)(CustomersAPIComponent);

export default CustomersContainer;
