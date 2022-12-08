import React from "react";
import { NavLink } from "react-router-dom";
import Customer from "./Customer";
import axios from 'axios';

const Customers = (props) => {
  //debugger;
  if (props.customers.length === 0) {
    axios.get("https://mockend.com/Menolas/ah-tattooista/customers").then(response => {
      props.setCustomers(response.data);
    });
  }

  const customers = props.customers
    .map(customer => {
      return (
        <Customer
          key={customer.id}
          customer={customer}
          changeStatus={props.changeStatus}
          unChangeStatus={props.unChangeStatus} />
      );
  });

  return (
    <ul className="admin__cards-list list">
      { customers }
    </ul>
  );
};

export default Customers;
