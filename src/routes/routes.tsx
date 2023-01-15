import type { RouteObject } from 'react-router-dom';

import Home from '@/components/Home';
import Layout from '@/components/Layout';
import NoMatch from '@/components/NoMatch';
import Normal from '@/components/ReactQuery/Normal';
import Infinite from '@/components/ReactQuery/Infinite';
import Paginated from '@/components/ReactQuery/Paginated';
import ReactQuery from '@/components/ReactQuery/Index';
import Details from '@/components/ReactQuery/Details';
import User from '@/components/ReactQuery/User';
// import { getPost } from '@/services/PostServices';

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
          {
            index: true,
            element: <Normal />,
          },
          {
            path: 'infinite',
            element: <Infinite />,
            children: [{ index: true, path: ':id', element: <Details /> }],
          },
          {
            path: 'paginated',
            element: <Paginated />,
            children: [{ index: true, path: ':id', element: <Details /> }],
          },
          {
            path: ':id',
            element: <Details />,
            // loader: ({ params }) => getPost(params.id!),
          },
          {
            path: 'user/:userId',
            element: <User />,
          },
        ],
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];