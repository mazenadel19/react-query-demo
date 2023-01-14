import type { RouteObject } from 'react-router-dom';

import Home from '@/components/Home';
import Layout from '@/components/Layout';
import NoMatch from '@/components/NoMatch';
import Normal from '@/components/ReactQuery/Normal';
import Infinite from '@/components/ReactQuery/Infinite';
import Paginated from '@/components/ReactQuery/Paginated';
import ReactQuery from '@/components/ReactQuery/Index';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'react-query',
        element: <ReactQuery />,
        children: [
          { index: true, path:"normal", element: <Normal /> , },
          { path: 'infinite', element: <Infinite /> },
          { path: 'paginated', element: <Paginated /> },
        ],
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];