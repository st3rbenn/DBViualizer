import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { notifications } from '@mantine/notifications';
import { RxCross2 } from 'react-icons/rx';
import NotificationUtils from '../utils/notification.utils';

interface IRequestResponse extends AxiosResponse {
  readonly message: string;
  readonly error: string;
  readonly result: any;
}

interface IRequestError {
  response: {
    data: {
      message: string;
      error: string;
    };
  };
}

interface AxiosError {
  config?: InternalAxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
  status?: number;
  toJSON: () => object;
  cause?: Error;
}

type RequestError = IRequestError & AxiosError;

const apiClient = axios.create({
  baseURL: '/api/v/0.1.0/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function get<T extends IRequestResponse>(endpoint: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint);
    new NotificationUtils(response.data.message).showSuccessMessage();
    return response.data;
  } catch (e) {
    const error = e as RequestError;
    new NotificationUtils(error?.response?.data?.message, error?.response?.data?.error).showErrorMessage();
    return error.response.data;
  }
}

export async function post<T extends IRequestResponse>(endpoint: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data);
    new NotificationUtils(response.data.message).showSuccessMessage();
    return response.data;
  } catch (e) {
    const error = e as RequestError;
    new NotificationUtils(error?.response?.data?.message, error?.response?.data?.error).showErrorMessage();
    return error.response.data;
  }
}

export async function put<T extends IRequestResponse>(endpoint: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.put(endpoint, data);
    new NotificationUtils(response.data.message).showSuccessMessage();
    return response.data;
  } catch (e) {
    const error = e as RequestError;
    new NotificationUtils(error?.response?.data?.message).showErrorMessage();
    return error.response.data;
  }
}

export async function del<T extends IRequestResponse>(endpoint: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.delete(endpoint);
    new NotificationUtils(response.data.message).showSuccessMessage();
    return response.data;
  } catch (e) {
    const error = e as RequestError;
    new NotificationUtils(error?.response?.data?.message).showErrorMessage();
    return error.response.data;
  }
}
