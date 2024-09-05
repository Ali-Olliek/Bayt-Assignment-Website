import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import LocalStorageService from '../services/LocalStorageService';

export function handleSuccess<T>(success: AxiosResponse<T>): AxiosResponse<T> {
  return success;
}

export function handleError(error: AxiosError) {
  const localStorageService = new LocalStorageService();

  switch (error.code) {
    case '400':
      console.log(error);
      break;

    case '401':
      localStorageService.deleteToken();
      window.location.href = '/login';
      break;

    default:
      break;
  }
}

//! Check later
export function handleRequest(
  request: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> {
  const localStorageService = new LocalStorageService();

  const token = localStorageService.getToken();

  request.headers['Authorization'] = `Bearer ${token}`;

  return request;
}
