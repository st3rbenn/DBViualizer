import axios, { AxiosResponse } from 'axios';
import { notifications } from '@mantine/notifications';
import { RxCross2 } from 'react-icons/rx';

interface IResponse {
  message: string;
  error: string;
  result: any;
}

const apiClient = axios.create({
  baseURL: '/api/v/0.1.0/',
  headers: {
    'Content-Type': 'application/json',
  },
  //  transformResponse: [
  //   (data) => {
  //     const parsedData = JSON.parse(data);
  //     if (parsedData.error) {
  //       notifications.show({
  //         title: parsedData.message,
  //         message: parsedData.error,
  //       });
  //     }
  //   }
  // ],
});

export async function get<T extends IResponse>(endpoint: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint);
    showSuccessMessage(response.data.message);
    return response.data;
  } catch (e) {
    showErrorMessage(e.response.data.message, e.response.data.error);
  }
}

export async function post<T extends IResponse>(endpoint: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data);
    showSuccessMessage(response.data.message);
    return response.data;
  } catch (e) {
    showErrorMessage(e.response.data.message, e.response.data.error);
  }
}

export async function put<T extends IResponse>(endpoint: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.put(endpoint, data);
    showSuccessMessage(response.data.message);
    return response.data;
  } catch (e) {
    showErrorMessage(e.response.data.message, e.response.data.error);
  }
}

export async function del<T extends IResponse>(endpoint: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.delete(endpoint);
    showSuccessMessage(response.data.message);
    return response.data;
  } catch (e) {
    showErrorMessage(e.response.data.message, e.response.data.error);
  }
}

function showErrorMessage(message: string, error: string) {
  notifications.show({
    title: message,
    message: error,
    withBorder: true,
    color: 'red',
    radius: 'sm',
  });
}

function showSuccessMessage(message: string, success?: string) {
  notifications.show({
    title: message,
    message: success,
    withBorder: true,
    color: 'green',
    radius: 'sm',
  });
}
