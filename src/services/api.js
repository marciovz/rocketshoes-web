import axios from 'axios';

cons api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
