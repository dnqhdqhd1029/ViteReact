import { useEffect } from 'react';
import axios from 'axios';

let init = false;
const AxiosFilter = () => {
  useEffect(() => {
    if (!init) {
      axios.interceptors.request.use((config) => {
        if (!config.headers['x-api-key']) {
          config.headers['x-api-key'] = '1234567890';
        }

        return config;
      });

      axios.interceptors.response.use(
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

      console.log('AxiosFilter');
      init = true;
    }
  }, []);

  return null;
};

export default AxiosFilter;
