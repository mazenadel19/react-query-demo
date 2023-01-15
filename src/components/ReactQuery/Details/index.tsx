import { useParams, Link } from 'react-router-dom';
import { getPost } from '@/services/PostServices';
import { getUser } from '@/services/UserServices';
import { useQuery } from '@tanstack/react-query';

const Details = () => {
  //  const data = useLoaderData();
  //console.log(data)
  const { id } = useParams();
  const {
    status: postStatus,
    data: postData,
    error: postError,
  } = useQuery({ queryKey: ['PostDetails'], queryFn: () => getPost(id!) });

  const {
    status: userStatus,
    data: userData,
    error: userError,
  } = useQuery({
    enabled: !!postData?.userId,
    queryKey: ['getUser'],
    queryFn: () => getUser(postData?.userId),
  });

  if (postStatus === 'loading') return <div>Loading Post...</div>;
  if (postStatus === 'error') return <div>Error Post: {JSON.stringify(postError)}</div>;

  if (userStatus === 'loading') return <div>Loading User...</div>;
  if (userStatus === 'error') return <div>Error User: {JSON.stringify(userError)}</div>;

  return (
    <>
      <Link to="/">Home</Link>
      <h1 className="text-4xl">{postData?.title}</h1>
      <h2 className="text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        <Link to={`/react-query/user/${userData?.id}`}>{userData.name}</Link>
      </h2>
      <h3 className="text-xl">{postData?.body}</h3>
    </>
  );
};

export default Details;
