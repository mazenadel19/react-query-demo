import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes/routes';

export const AppRoutes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
