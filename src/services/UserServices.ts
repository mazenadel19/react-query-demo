import axios from 'axios';
import { User } from './UserServiceDto';

const getUser = async (id: number | undefined) => {
    const response = await axios.get<User.RootObject>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
};

export { getUser };
