import React from "react";
import Customer from "./Customer";
import axios from 'axios';
import classNames from "classnames";

class Customers extends React.Component {
  //debugger;
  
  componentDidMount() {
    //console.log(this.props.currentPage);
    debugger;
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers`)
      .then(response => {
        this.props.setCustomers(response.data);
        this.props.setCustomersTotalCount(response.data.length);
        console.log(this.props.totalCustomersCount);
      });
  }

  onPageChanged = (currentPage) => {
    //debugger;
    this.props.setCurrentPage(currentPage);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/customers?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
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

    let pagesCount = Math.ceil(this.props.totalCustomersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className="pagination">
          <ul className="list pagination__list">
            {
              pages.map(page => {
                let pageClassNames = classNames("pagination__item", { "currentPage": this.props.currentPage === page });
                return (
                  <li
                    key={page}
                    className={this.props.currentPage === page ? "pagination__item currentPage" : "pagination__item"}
                    onClick={ () => { this.onPageChanged(page) } }>
                    {page}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <ul className="admin__cards-list list">
          {this.customers}
        </ul>
      </div>
    );
  }
};

export default Customers;
