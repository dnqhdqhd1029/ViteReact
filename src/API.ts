import axios from 'axios';
import Config from '@/Config';
import Session from '@/Session';
import CommonUtils from '@/utils/CommonUtils';
import { useState } from 'react';
import useConfirm from '@/hooks/useConfirm';

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

const instance = axios.create({
  baseURL: Config.getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 30000,
  // crossDomain 대신 사용
  withCredentials: true,
});

const requestRefreshToken = async (memberNumber: string, refreshToken: string): Promise<any> => {
  const response = await instance.post('/api/v1/auth/refresh', {
    params: {
      memberNumber,
      refreshToken,
    },
  });
  return response;
};

export const useAxiosInterceptor = () => {
  instance.interceptors.request.use((config) => {
    if (!CommonUtils.isEmpty(Session.getAccessToken())) {
      config.headers.Authorization = Session.getAccessToken();
    }

    if (!config.headers['x-api-key']) {
      config.headers['x-api-key'] = Config.getXApiKey();
    }

    return config;
  });

  instance.interceptors.response.use(
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

        const retryOriginalRequest = new Promise((resolve) => {
          addRefreshSubscriber((accessToken) => {
            originalConfig.headers.Authorization = accessToken;
            resolve(instance(originalConfig));
          });
        });

        if (!isRefreshing) {
          isRefreshing = true;
          const { data } = await requestRefreshToken(memberNumber, refreshToken);

          isRefreshing = false;
          Session.setAccessToken(data.token);
          Session.setRefreshToken(data.refreshToken);

          // todo: bridge 처리

          instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          onTokenRefreshed(data.token);
        }
        return retryOriginalRequest;
      } else if (String(error?.response?.status) === '403') {
        console.log('Axios Response Error', { statusCode }, { message }, config, error);
      } else if (String(error?.response?.status) === '404') {
        console.log('Axios Response Error', { statusCode }, { message }, config, error);
      } else if (String(error?.response?.status) === '500') {
        console.log('Axios Response Error', { statusCode }, { message }, config, error);
      } else if (String(error?.response?.status) === '503') {
        console.log('Axios Response Error', { statusCode }, { message }, config, error);
      }
      return Promise.reject(error);
    }
  );
};

class API  {
  public get = async (url: string, config?: any) => {
    const response = await instance.get(url, config);
    return response;
  }
  public post = async (url: string, data?: any, config?: any) => {
    const response = await instance.post(url, data, config);
    return response;
  }
  public put = async (url: string, data?: any, config?: any) => {
    const response = await instance.put(url, data, config);
    return response;
  }
  public delete = async (url: string, config?: any) => {
    const response = await instance.delete(url, config);
    return response;
  }
}

export default new API();
