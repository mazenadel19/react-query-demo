import { Outlet } from 'react-router-dom';
import ReactQueryNav from './ReactQueryNav';
const ReactQuery = () => {
  return (
    <div>
      <ReactQueryNav />
      <hr />

      <Outlet />
    </div>
  );
};

export default ReactQuery;
