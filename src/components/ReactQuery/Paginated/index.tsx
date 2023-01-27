import { getPaginatedPosts } from '@/services/PostServices';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Paginated = () => {
  const [params] = useSearchParams()
  const _page = parseInt(params.get('page') || '1')
  const { data, error, status, fetchStatus } = useQuery({
    queryKey: ['normal', { _page }],
    queryFn: () => getPaginatedPosts(_page),
    keepPreviousData: true // keep previous data till next is fetched
  });
  const { pathname } = useLocation();
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {JSON.stringify(error)}</div>;
  const { posts } = data

  return (
    <section>
      <h1 className={`${fetchStatus === 'fetching' ? "visible" : "invisible"}`}>
        fetching your new data
      </h1>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={`/react-query/${post.id}`}>
            <div className="p-2 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="inline-flex">
        <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" to={`${pathname}?page=${_page - 1}`}>Previous</Link>
        <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" to={`${pathname}?page=${_page + 1}`}>Next</Link>
      </div>

    </section>
  );
};

export default Paginated;
