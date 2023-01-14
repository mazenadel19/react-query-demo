import { useRoutes } from 'react-router-dom';
import { routes } from '@/routes/routes';

export const AppRoutes = () => {
  let element = useRoutes(routes);
  return <>{element}</>;
};
