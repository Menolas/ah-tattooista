import React from 'react';
import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, setCurrentPageAC, setCustomersTotalCountAC, setIsFetchingAC } from '../../redux/customers-reducer';
import Customers from "./Customers";
import axios from 'axios';
import Preloader from './../common/Preloader';

class CustomersAPIComponent extends React.Component {
  //debugger;
  
  componentDidMount() {
    //debugger;
    this.props.toggleIsFetching(true);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
        axios.get(`https://mockend.com/Menolas/ah-tattooista/customers`)
          .then(response => {
            this.props.setCustomersTotalCount(response.data.length);
          });
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
        this.props.toggleIsFetching(false);
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
          onPageChanged={this.onPageChanged} />
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

let mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (customerId) => {
      dispatch(changeCustomerStatusAC(customerId));
    },

    unChangeStatus: (customerId) => {
      dispatch(unChangeCustomerStatusAC(customerId));
    },

    setCustomers: (customers) => {
      dispatch(setCustomersAC(customers));
    },

    setCurrentPage: (currentPage) => {
      console.log(currentPage);
      dispatch(setCurrentPageAC(currentPage));
    },

    setCustomersTotalCount: (count) => {
      dispatch(setCustomersTotalCountAC(count));
    },

    toggleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    }
  };
};

const CustomersContainer = connect(mapStateToProps, mapDispatchToProps)(CustomersAPIComponent);

export default CustomersContainer;
