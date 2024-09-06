import React, { useEffect, useState } from 'react';
import { User } from '../classes/User';
import { getUsersApi } from '../apis/users.api';
import UserControls from '../components/users/UserControls';

function Users() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersApi();

      setUsers(users);
    };

    fetchUsers();
  }, []);

  const headers = ['Id', 'Username', 'Email', 'Is Admin', 'Action'];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <input disabled type='checkbox' defaultChecked={user.isAdmin} />
            </td>
            <td>
              <UserControls user={user} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
