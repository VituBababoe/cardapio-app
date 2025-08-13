import axios, {
    AxiosInstance,
  } from 'axios';

// Cria uma instância do axios
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;