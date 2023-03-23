import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AxiosFilter from '@/AxiosFilter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AxiosFilter />
    <App />
  </React.StrictMode>
);
