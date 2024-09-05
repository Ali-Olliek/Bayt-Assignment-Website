import axios from 'axios';
import { handleRequest, handleError, handleSuccess } from './interceptors';

const unAuthenticatedApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    timeout: 50000,
  },
});

const authenticatedApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Content: 'application/json',
    timeout: 50000,
  },
});

authenticatedApi.interceptors.request.use(handleRequest);
authenticatedApi.interceptors.response.use(handleSuccess, handleError);

unAuthenticatedApi.interceptors.response.use(handleSuccess, handleError);
export { unAuthenticatedApi, authenticatedApi };
