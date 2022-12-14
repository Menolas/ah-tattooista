import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/'
});

export const clientsAPI = {

  getClients(pageSize = 5, currentPage = 1) {
    return instance.get(`clients?&page=${currentPage}&limit=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  getClientProfile(clientId) {
    return instance.get(`clients/${clientId}`)
      .then(response => {
        return response.data;
      });
  },

  updateContactField(clientId, contactTitle, contactFieldValue) {
    return instance.post(`clients/updateContact/${clientId}`, {
      contactTitle: contactTitle,
      contactFieldValue: contactFieldValue
    })
      .then(response => {
        return response.data;
      })
  },

  deleteClient(clientId) {
    return instance.delete(`clients/${clientId}`)
      .then(response => {
        return response.data;
      });
  }
}
