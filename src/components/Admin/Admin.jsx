import React from "react";
import { NavLink } from "react-router-dom";
import Customer from "./Customer";
import axios from 'axios';

const Admin = (props) => {
  //debugger;
  if (props.customers.length === 0) {
    /* props.setCustomers([
      {
        id: "dkjghfsdaghs",
        date: "",
        fullName: "Menolas",
        contacts: {
          "facebook": "",
          "insta": "",
          "email": "",
          "phone": "0047094070141",
        },
        message: "I want to make an appointment",
        status: false,
      },
      {
        id: "oigfurgjlsdfgj",
        date: "",
        fullName: "Snejanna",
        contacts: {
          facebook: "",
          insta: "",
          email: "",
          phone: "0047094070141",
        },
        message: "I am not sure what I want",
        status: false,
      },
      {
        id: "eioutvnjflg",
        date: "",
        fullName: "Kikirikki",
        contacts: {
          facebook: "",
          insta: "",
          email: "",
          phone: "0047094070141",
        },
        message: "I need caver up ASAP",
        status: false,
      },
    ]); */

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
    <div className="admin container">
      <div className="admin__header">
        <NavLink to="/" className="admin__back-link">
          Back to site
        </NavLink>
        <h2>Admin</h2>
      </div>
      <div className="">
        <div className="admin__view-btns">
          <button className="btn">Customers</button>
          <button className="btn">My Clients</button>
        </div>
        <ul className="admin__cards-list list">
          { customers }
        </ul>
      </div>
    </div>
  );
};

export default Admin;
