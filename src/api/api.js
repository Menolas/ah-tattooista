import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/',
  headers: {
    "API-KEY": null
  }
});

export const customersAPI = {

  getCustomers(pageSize = 5, currentPage = 1) {
    //return instance.get(`customers?limit=${pageSize}&offset=${currentPage}`)
    return instance.get(`customers`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  contactCustomer(customerId) {
    return instance.patch(`customers/contact/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  unContactCustomer(customerId) {
    return instance.patch(`customers/unContact/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  deleteCustomer(customerId) {
    return instance.delete(`customers/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  }

}
