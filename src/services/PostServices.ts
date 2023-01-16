import API from './API';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const URL = '/posts';

const getPosts = async () => {
  const response = await API.get<Post[]>(URL);
  return response.data;
};

const getPost = async (id: string) => {
  if (id) {
    const res = await API.get<Post>(`${URL}/${id}`);
    return res.data;
  } else return null;
};

const addPost = async ({ title, body }: { title: string; body: string }) => {
  if (title && body) {
    const res = await API.get<Post>(`${URL}`);
    return res.data;
  } else return null;
};

// axios get paginated Posts
const getPaginatedPosts = async () => {
  const res = await API.get<Post[]>(URL + '?_page=1&amp;_limit=10');
  return res.data;
};

// axios infinite scrolling Posts
const getInfiniteScrollPosts = async () => {
  const res = await API.get<Post[]>(URL + '?_page=1&amp;_limit=10');
  return res.data;
};

export { getPosts, getPost, getPaginatedPosts, getInfiniteScrollPosts };
