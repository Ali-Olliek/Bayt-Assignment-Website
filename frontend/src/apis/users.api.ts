import { User } from '../classes/User';
import { authenticatedApi } from '../config/api';

const update = async (isAdmin: boolean, id: number) => {
  try {
    const { data } = await authenticatedApi.put(`/admin/users/${id}`, {
      is_admin: isAdmin,
    });

    const user = new User(data.data);

    return user;
  } catch (error) {
    throw error;
  }
};

const index = async () => {
  try {
    const { data } = await authenticatedApi.get('/admin/users');

    const users = data.data.map((user: any) => new User(user));

    return users;
  } catch (error) {
    throw error;
  }
};

export { update as updateUserApi, index as getUsersApi };
