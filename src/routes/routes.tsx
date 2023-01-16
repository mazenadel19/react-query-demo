import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import Home from '@/components/Home';
import Layout from '@/components/Layout';
// import { getPost } from '@/services/PostServices';

const ReactQuery = lazy(() => import('@/components/ReactQuery/Index'));
const Normal = lazy(() => import('@/components/ReactQuery/Normal'));
const Infinite = lazy(() => import('@/components/ReactQuery/Infinite'));
const Paginated = lazy(() => import('@/components/ReactQuery/Paginated'));
const Details = lazy(() => import('@/components/ReactQuery/Details'));
const User = lazy(() => import('@/components/ReactQuery/User'));
const Create = lazy(() => import('@/components/ReactQuery/Create'));

const NoMatch = lazy(() => import('@/components/NoMatch'));
const Error = lazy(() => import('@/components/Error'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement : <Error />,
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
          {
            path: 'create',
            element: <Create />,
          },
        ],
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];