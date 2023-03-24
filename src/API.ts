import axios from 'axios';
import Config from '@/Config';
import Session from '@/Session';
import CommonUtils from '@/utils/CommonUtils';

const API = axios.create({
  baseURL: Config.getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 30000,
  // crossDomain 대신 사용
  withCredentials: true,
});

export const useAxiosInterceptor = () => {
  API.interceptors.request.use((config) => {
    if (!CommonUtils.isEmpty(Session.getAccessToken())) {
      config.headers.Authorization = Session.getAccessToken();
    }

    if (!config.headers['x-api-key']) {
      config.headers['x-api-key'] = Config.getXApiKey();
    }

    return config;
  });

  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      console.log('error.response.status ', error.response.status);
      if (error.response.status === 401 && !originalRequest._retry) {
        alert('401');
      } else if (error.response.status === 403) {
        alert('403 - Forbidden');
      }

      return error;
    }
  );

  console.log('API initialized');
};

export default API;
