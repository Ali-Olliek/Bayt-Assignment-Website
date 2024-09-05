import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import LocalStorageService from '../services/LocalStorageService';

export function handleSuccess<T>(success: AxiosResponse<T>): AxiosResponse<T> {
  return success;
}

export function handleError(error: AxiosError) {
  const localStorageService = LocalStorageService.getInstance();

  switch (error.code) {
    case '400':
      console.log(error);
      break;

    case '401':
      localStorageService.deleteUser();
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
  const localStorageService = LocalStorageService.getInstance();

  const user = localStorageService.getUser();

  request.headers['Authorization'] = `Bearer ${user?.token}`;

  return request;
}
