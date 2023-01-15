import { useParams, Link } from 'react-router-dom';
import { getUser } from '@/services/UserServices';
import { useQuery } from '@tanstack/react-query';

const User = () => {
    const { userId } = useParams();
    console.log('here')
  const {
    status: userStatus,
    data: userData,
    error: userError,
  } = useQuery({
    queryKey: ['getUser'],
    queryFn: () => getUser(parseInt(userId!)),
  });

  if (userStatus === 'loading') return <div>Loading User...</div>;
  if (userStatus === 'error') return <div>Error User: {JSON.stringify(userError)}</div>;

  return (
    <>
      <Link to="/">Home</Link>
      <h1 className="text-4xl">{userData.name}</h1>
      <h2 className="text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        {userData.email}
      </h2>
      <h3 className="text-xl">{userData.phone}</h3>
    </>
  );
};

export default User;
