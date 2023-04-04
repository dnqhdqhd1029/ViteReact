import React, {useEffect} from 'react';
import {BrowserRouter, useRoutes, useLocation} from 'react-router-dom';
import Home from '@/pages/Home';
import Guide from '@/pages/Guide';
import Layout from '@/layouts/Layout';
import TestApp from '@/pages/test/TestApp';
import TestApp2 from '@/pages/test/TestApp2';
import NotFound from '@/pages/NotFound';

interface MapRouterProps {
  path: string;
  element: JSX.Element;
  children?: any;
}

const routes = (): MapRouterProps[] => [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/test',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <TestApp/>,
      },
      {
        path: 'aa',
        element: <TestApp2/>,
      },
    ],
  },
  {
    path: '/test2',
    element: <TestApp2/>,
  },
  {
    path: '/guide',
    element: <Guide/>,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
  {
    path: '/guide',
    element: <Guide/>,
  }
];

const mapRoutes = (routes: any): MapRouterProps[] => {
  return routes.map(({path, element, children}: any) => {
    return {
      path,
      element,
      children: !!children && mapRoutes(children),
    };
  });
};

const BaseRoute = () => {
  const location = useLocation();

  return useRoutes(mapRoutes(routes()));
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <BaseRoute/>
    </BrowserRouter>
  );
};

export default Router;
