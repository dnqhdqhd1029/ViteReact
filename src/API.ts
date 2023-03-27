import axios from 'axios';
import Config from '@/Config';
import Session from '@/Session';
import CommonUtils from '@/utils/CommonUtils';
import { useState } from 'react';


let isRefreshing = false;
type RefreshSubscriber = (accessToken: string) => void;
let refreshSubscribers: RefreshSubscriber[] = [];

const addRefreshSubscriber = (callback: RefreshSubscriber) => {
  refreshSubscribers.push(callback);
};

const onTokenRefreshed = (accessToken: string): void => {
  const subscribers = [...refreshSubscribers];
  refreshSubscribers = [];
  subscribers.forEach((callback: RefreshSubscriber) => callback(accessToken));
};


const API = axios.create({
  baseURL: Config.getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 30000,
  // crossDomain 대신 사용
  withCredentials: true,
});

const requestRefreshToken = async (memberNumber: string, refreshToken: string): Promise<any> => {
  const response = await API.post('/api/v1/auth/refresh',
    {
      params: {
        memberNumber,
        refreshToken
      }
    }
  );
  return response;
};

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

      const { config } = error;
      const message = String(error?.message || '');
      const statusCode = String(error?.response?.status || '');

      console.log('Axios Response Error', { statusCode }, { message }, config, error);

      const originalConfig = config;

      if (String(error?.response?.status) === '401') {
        const memberNumber = '0';
        const refreshToken = Session.getRefreshToken();

        const retryOriginalRequest = new Promise(resolve => {
          addRefreshSubscriber(accessToken => {
            originalConfig.headers.Authorization = accessToken;
            resolve(API(originalConfig));
          });
        });

        if (!isRefreshing) {
          isRefreshing = true;
          const { data } = await requestRefreshToken(memberNumber, refreshToken);

          isRefreshing = false;
          Session.setAccessToken(data.token);
          Session.setRefreshToken(data.refreshToken);

          // todo: bridge 처리

          API.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          onTokenRefreshed(data.token);
        }
        return retryOriginalRequest;
      }
      return Promise.reject(error);
    }
  );

  console.log('API initialized');
};

export default API;
