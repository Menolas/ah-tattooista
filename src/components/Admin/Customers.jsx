import React from "react";
import Customer from "./Customer";
import axios from 'axios';

class Customers extends React.Component {

  componentDidMount() {
    axios.get("https://mockend.com/Menolas/ah-tattooista/customers")
      .then(response => {
        this.props.setCustomers(response.data);
      });
  }

  customers = this.props.customers
    .map(customer => {
      return (
        <Customer
          key={customer.id}
          customer={customer}
          changeStatus={this.props.changeStatus}
          unChangeStatus={this.props.unChangeStatus} />
      );
  });
  
  render = () => {
    return (
      <ul className="admin__cards-list list">
        {this.customers}
      </ul>
    );
  }
};

export default Customers;
