import API from './API';
import { User } from './UserServiceDto';

const URL = 'users';

const getUser = async (id: number | undefined) => {
    const response = await API.get<User.RootObject>(`${URL}/${id}`);
    return response.data;
};

export { getUser };
