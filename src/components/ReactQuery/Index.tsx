import { Link , Outlet } from 'react-router-dom';
const ReactQuery = () => {
  return (
    <div>
      <h2>ReactQuery</h2>

      <nav>
        <ul>
          <li>
            <Link to="normal">normal</Link>
          </li>
          <li>
            <Link to="paginated">paginated</Link>
          </li>
          <li>
            <Link to="infinite">infinite</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </div>
  );
};

export default ReactQuery;
