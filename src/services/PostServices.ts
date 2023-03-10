import API from './API';

export interface Post {
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

const getPaginatedPosts = async (_page = 1, _limit = 10) => {
  const response = await API.get<Post[]>(URL, { params: { _page, _limit } });
  return {
    posts: response.data,
    nextPage: response.data.length === _limit ? _page + 1 : null,
    previousPage: _page > 1 ? _page - 1 : null
  }
};

const getPost = async (id: string) => {
  if (id) {
    const res = await API.get<Post>(`${URL}/${id}`);
    return res.data;
  } else return null;
};

const createPost = async ({ title, body, userId }: Omit<Post, 'id'>) => {
  if (title && body && userId) {
    const res = await API.post<Post>(`${URL}`, { title, body, userId });
    return res.data;
  } else return null;
};

export { getPosts, getPost, getPaginatedPosts, createPost };
