import React from "react";
import Customer from "./Customer";

const Customers = (props) => {

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

  let pagesCount = Math.ceil(props.totalCustomersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  pages = pages
    .map(page => {
      return (
        <li
          key={page}
          className={props.currentPage === page ? "pagination__item currentPage" : "pagination__item"}
          onClick={() => { props.onPageChanged(page) }}>
          {page}
        </li>
      );
    });

  return (
    <div>
      <div className="pagination">
        <ul className="list pagination__list">
          {
            pages
          }
        </ul>
      </div>
      <ul className="admin__cards-list list">
        {customers}
      </ul>
    </div>
  );
};

export default Customers;
