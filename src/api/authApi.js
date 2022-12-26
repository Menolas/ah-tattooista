import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/',
  headers: {
    "API-KEY": null
  }
});

export const authAPI = {
  me() {
    return instance.get('admin/auth/me');
  }
}
