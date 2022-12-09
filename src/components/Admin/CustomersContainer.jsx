import React from 'react';
import { connect } from 'react-redux/es/exports';
import { changeCustomerStatusAC, unChangeCustomerStatusAC, setCustomersAC, setCurrentPageAC, setCustomersTotalCountAC } from '../../redux/customers-reducer';
import Customers from "./Customers";
import axios from 'axios';

class CustomersAPIComponent extends React.Component {
  //debugger;
  
  componentDidMount() {
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
        //this.props.setCustomersTotalCount(response.data.length);
        console.log(response.data);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    //console.log(currentPage);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setCustomers(response.data);
      });
  }
  
  render = () => {

    return <Customers
      customers={this.props.customers}
      totalCustomersCount={this.props.totalCustomersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged} />;
  }
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    customers: state.customers.customers,
    pageSize: state.customers.pageSize,
    totalCustomersCount: state.customers.totalCustomersCount,
    currentPage: state.customers.currentPage,
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
    }
  };
};

const CustomersContainer = connect(mapStateToProps, mapDispatchToProps)(CustomersAPIComponent);

export default CustomersContainer;
