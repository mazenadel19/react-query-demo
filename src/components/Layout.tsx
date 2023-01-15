import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';

export default function Layout() {
  return (
    <>
      <MainNav />
      <hr />
      <Outlet />
    </>
  );
}
