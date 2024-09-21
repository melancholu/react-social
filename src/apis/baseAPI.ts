import axios, { AxiosRequestConfig } from 'axios';

import config from '../config';

// TODO: - Add interceptors
export const axiosConfig: AxiosRequestConfig = {
  baseURL: config.BASE_URL,
  // withCredentials: true,
  timeout: 9_000,
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
