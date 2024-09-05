import { User } from '../classes/User';
import { authenticatedApi } from '../config/api';

const update = async (isAdmin: boolean, id: number) => {
  try {
    const { data } = await authenticatedApi.put(`/admins/users/${id}`, {
      is_admin: isAdmin,
    });

    const user = new User(data);

    return user;
  } catch (error) {
    throw error;
  }
};

const index = async () => {
  try {
    const { data } = await authenticatedApi.get('/admins/users');

    const users = data.data.map((user: any) => new User(user));

    return users;
  } catch (error) {
    throw error;
  }
};

export { update as updateUserApi, index as getUsersApi };
