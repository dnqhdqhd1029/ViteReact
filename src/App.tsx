import React from 'react';
import '@/assets/style/style.scss';
import '@/assets/styles.scss';
import '@/utils/i18n';
import Router from '@/Router';
import { useAxiosInterceptor } from '@/API';

function App() {
  useAxiosInterceptor();

  return (
    <>
      <Router />
    </>
  );
}

export default App;
