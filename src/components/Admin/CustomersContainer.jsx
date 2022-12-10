import React from 'react';
import { connect } from 'react-redux/es/exports';
import { changeCustomerStatus, unChangeCustomerStatus, setCustomers, setCurrentPage, setCustomersTotalCount, setIsFetching } from '../../redux/customers-reducer';
import Customers from "./Customers";
import axios from 'axios';
import Preloader from './../common/Preloader';

class CustomersAPIComponent extends React.Component {
  //debugger;
  
  componentDidMount() {
    //debugger;
    this.props.setIsFetching(true);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
        axios.get(`https://mockend.com/Menolas/ah-tattooista/customers`)
          .then(response => {
            this.props.setCustomersTotalCount(response.data.length);
          });
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
        this.props.setIsFetching(false);
      });
  }
  
  render = () => {

    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Customers
          customers={this.props.customers}
          totalCustomersCount={this.props.totalCustomersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          changeCustomerStatus={this.props.changeCustomerStatus}
          unChangeCustomerStatus={this.props.unChangeCustomerStatus}
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
    totalCustomersCount: state.customers.totalCustomersCount,
    currentPage: state.customers.currentPage,
    isFetching: state.customers.isFetching,
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
  }
)(CustomersAPIComponent);

export default CustomersContainer;
