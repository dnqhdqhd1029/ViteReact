import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import '@/styles.scss';
import '@/utils/i18n';
import { useAxiosInterceptor } from '@/API';

import Home from '@/pages/Home';
import TestApp from '@/pages/test/TestApp';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Route element={<TestApp />} />,
  },

  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  useAxiosInterceptor();

  return <RouterProvider router={router} />;
}

export default App;
