import { getPosts } from '@/services/PostServices';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';

const Normal = () => {
  const { data: Posts, error, status } = useQuery({ queryKey: ['normal'], queryFn: getPosts });
  const { pathname } = useLocation();

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      {Posts.map((post) => (
        <Link key={post.id} to={`${pathname}/${post.id}`}>
          <div className="p-2 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
            {post.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Normal;
