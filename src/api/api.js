import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://mockend.com/Menolas/ah-tattooista/',
  headers: {
    "API-KEY": null
  }
});

export const customersAPI = {

  getCustomers(pageSize = 5, currentPage = 1) {
    return instance.get(`customers?limit=${pageSize}&offset=${currentPage}`)
      .then(response => {
        return response.data;
      });
  },

  getTotalCount() {
    return instance.get(`customers`)
      .then(response => {
        return response.data.length;
      });
  }

}
