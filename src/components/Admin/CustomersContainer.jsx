import React from 'react';
import { connect } from 'react-redux/es/exports';
import { changeCustomerStatus, unChangeCustomerStatus, setCustomers, setCurrentPage, setCustomersTotalCount, setIsFetching, setIsStatusChanging } from '../../redux/customers-reducer';
import Customers from "./Customers";
import Preloader from './../common/Preloader';
import { customersAPI } from '../../api/api';

class CustomersAPIComponent extends React.Component {
  
  componentDidMount() {
    this.props.setIsFetching(true);
    customersAPI.getCustomers(this.props.pageSize, this.props.currentPage)
      .then(async (data) => {
        //debugger;
        await this.props.setIsFetching(false);
        await this.props.setCustomers(data);
        const count = await customersAPI.getTotalCount();
        this.props.setCustomersTotalCount(count);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(currentPage);
    customersAPI.getCustomers(this.props.pageSize, currentPage)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setCustomers(data);  
      });
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
          changeCustomerStatus={this.props.changeCustomerStatus}
          unChangeCustomerStatus={this.props.unChangeCustomerStatus}
          setIsStatusChanging={this.props.setIsStatusChanging}
          isStatusChanging={this.props.isStatusChanging}
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
    changeCustomerStatus, 
    unChangeCustomerStatus,
    setCustomers,
    setCurrentPage,
    setCustomersTotalCount,
    setIsFetching,
    setIsStatusChanging,
  }
)(CustomersAPIComponent);

export default CustomersContainer;
