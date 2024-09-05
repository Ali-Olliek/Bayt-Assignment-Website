import axios from 'axios';
import { handleError, handleSuccess } from './interceptors';

const unAuthenticatedApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    timeout: 50000,
  },
});

unAuthenticatedApi.interceptors.response.use(handleSuccess, handleError);
export default unAuthenticatedApi;
