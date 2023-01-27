import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, } from 'react-router-dom';
import { getPaginatedPosts, Post } from '@/services/PostServices';

type useInfiniteQueryType = {
  nextPage: number | undefined
  previousPage: number | undefined
  posts: Post[]
}


const Infinite = () => {
  const { data: Posts, error, status, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery<useInfiniteQueryType>({
    queryKey: ["normal", "infinite"],
    getNextPageParam: prevData => prevData.nextPage,
    // queryFn: ({ pageParam = 0 }) => getPaginatedPosts(pageParam),
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {JSON.stringify(error)}</div>;
  console.log(Posts)
  return (
    <section>
      <h1 className={`${isFetchingNextPage ? "visible" : "invisible"}`}>
        fetching your new data
      </h1>
      <div>
        {(Posts?.pages[0] as Post[])?.map((post) => (
          <Link key={post.id} to={`/react-query/${post.id}`}>
            <div className="p-2 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
              {post.title}
            </div>
          </Link>
        ))}
        {hasNextPage && (
          <button
            className="p-2 font-medium text-blue-600 under dark:text-blue-500 hover:no-underline"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Fetching next page" : "Load next page"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Infinite
