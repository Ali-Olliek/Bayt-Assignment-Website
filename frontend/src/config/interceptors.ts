import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import LocalStorageService from '../services/LocalStorageService';

export function handleSuccess<T>(success: AxiosResponse<T>): AxiosResponse<T> {
  return success;
}

export function handleError(error: AxiosError) {
  const localStorageService = LocalStorageService.getInstance();

  switch (error.response?.status) {
    case 400:
      break;

    case 401:
      localStorageService.deleteUser();
      window.location.href = '/sign-in';
      break;

    default:
      console.log('Unhandled Error', error);
      break;
  }
}

export function handleRequest(
  request: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> {
  const localStorageService = LocalStorageService.getInstance();

  const user = localStorageService.getUser();

  request.headers['Authorization'] = `Bearer ${user?.token}`;

  return request;
}
