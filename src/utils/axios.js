import axios from 'axios';
import { getHost } from 'configs/environment';

const axiosInstance = () => {
  let token = window.localStorage.getItem('token');
  let tokenType = 'JWT';
  let url = '/login';

  const instance = axios.create({
    baseURL: getHost(),
    headers: {
      Authorization: token ? `${tokenType} ${token}` : undefined,
    },
  });

  instance?.interceptors?.request?.use((config) => {
    const timestamp = new Date().getTime();
    config.params = { ...config.params, t: timestamp };
    return config;
  });

  instance?.interceptors?.response?.use(
    (response) => {
      if (response.status === 401) {
        window.open(url, '_self');
      }
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        window.open(url, '_self');
      } else {
        return Promise.reject(error);
      }
    }
  );

  return instance;
};

export default axiosInstance;
