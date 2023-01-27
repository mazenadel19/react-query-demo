import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
  let error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>
    <h1 className='text-center'>Oops!</h1>
    {import.meta.env.MODE === "development" && <pre className='whitespace-pre-wrap'>
      {JSON.stringify(error, null, 4).replace(/\\n/g, '\n')}
    </pre>}
  </div>;
};

export default Error;
