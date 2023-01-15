import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
  const res = await axios.get<Post[]>(baseUrl);
  return res.data;
};

const getPost = async (id: string) => {
  if (id) {
    const res = await axios.get<Post>(`${baseUrl}/${id}`);
    return res.data;
  } else return null;
};

// axios get paginated Posts
const getPaginatedPosts = async () => {
  const res = await axios.get<Post[]>(baseUrl + '?_page=1&amp;_limit=10');
  return res.data;
};

// axios infinite scrolling Posts
const getInfiniteScrollPosts = async () => {
  const res = await axios.get<Post[]>(baseUrl + '?_page=1&amp;_limit=10');
  return res.data;
};

export { getPosts, getPost, getPaginatedPosts, getInfiniteScrollPosts };
