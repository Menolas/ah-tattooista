import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const authAPI = {

  me(token) {
    return instance.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  login(username, password) {
    return instance.post('auth/login', { username, password });
  },

  logout(userId) {
    return instance.delete(`auth/logout/${userId}`);
  }
}
