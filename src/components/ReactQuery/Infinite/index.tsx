import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, } from 'react-router-dom';
import { getPaginatedPosts, Post } from '@/services/PostServices';

const Infinite = () => {
  const { data, error, status, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["normal", "infinite"],
    queryFn: ({ pageParam = 1 }) => getPaginatedPosts(pageParam),
    getNextPageParam: prevData => prevData.nextPage
  });

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {JSON.stringify(error)}</div>

  const Posts = data?.pages.map(data => data.posts).flat();

  return (
    <section>
      <h1 className={`${isFetchingNextPage ? "visible" : "invisible"}`}>
        fetching your new data
      </h1>
      <div>
        {Posts?.map((post) => (
          <Link key={post.id} to={`/react-query/${post.id}`}>
            <div className="p-2 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
              {post.title}
            </div>
          </Link>
        ))}

        {hasNextPage && (
          <button
            className="text-white disabled:bg-gray-600 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Infinite
