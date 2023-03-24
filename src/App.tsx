import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/styles.scss';
import '@/utils/i18n';
import { useAxiosInterceptor } from '@/API';

import Home from '@/pages/Home';
import TestApp from '@/pages/test/TestApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <TestApp />,
  },
]);

function App() {
  useAxiosInterceptor();

  return <RouterProvider router={router} />;
}

export default App;
