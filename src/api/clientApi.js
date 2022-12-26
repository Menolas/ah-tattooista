import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/',
  headers: {
    "API-KEY": null
  }
});

export const clientsAPI = {

  getClients(pageSize = 5, currentPage = 1) {
    return instance.get(`clients?&page=${currentPage}&limit=${pageSize}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  getClientProfile(clientId) {
    return instance.get(`clients/${clientId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  deleteClient(clientId) {
    //debugger;
    return instance.delete(`clients/${clientId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  }

}
