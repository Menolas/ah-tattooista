import React from "react";
import Paginator from "../Paginator";
import Customer from "./Customer";

const Customers = (props) => {

  const customers = props.customers
    .map(customer => {
      return (
        <Customer
          key={customer.id}
          customer={customer}
          changeCustomerStatus={props.changeCustomerStatus}
          unChangeCustomerStatus={props.unChangeCustomerStatus} />
      );
  });

  return (
    <>
      <Paginator
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <ul className="admin__cards-list list">
        {customers}
      </ul>
    </>
  );
};

export default Customers;
