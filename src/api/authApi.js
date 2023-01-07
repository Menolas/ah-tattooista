import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
  /* headers: {
    'authorization': `Bearer ${token}`
  } */
});

export const authAPI = {

  me(token) {
    //debugger;
    return instance.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  login(username, password) {
    //debugger;
    return instance.post('auth/login', { username, password });
  },

  logout() {
    return instance.delete('auth/logout')
      .then(response => {
        return response.data;
      });
  }
}
