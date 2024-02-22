// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error.message);
    return Promise.reject(error);
  }
);

export default api;
