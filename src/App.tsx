import React from 'react';
import '@/styles.scss';
import '@/utils/i18n';
import StoreProvider from '@/provider/StoreProvider';
import Router from '@/Router';
import { useAxiosInterceptor } from '@/API';

function App() {
  useAxiosInterceptor();

  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
