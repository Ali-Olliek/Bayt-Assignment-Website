import './screens.css';
import { User } from '../classes/User';
import { useContext, useEffect, useState } from 'react';
import { getUsersApi } from '../apis/users.api';
import UserControls from '../components/users/UserControls';
import { ControlsContext } from '../context/ControlsContext';

const HEADERS = ['', 'Username', 'Email', 'Is Admin', 'Action'];

function Users() {
  const [users, setUsers] = useState<User[]>();
  const { isUpdatingContent, toggleUpdating } = useContext(ControlsContext);

  const fetchUsers = async () => {
    const users = await getUsersApi();

    setUsers(users);
  };

  //# On Page Start
  useEffect(() => {
    fetchUsers();
  }, []);

  //# On Content Update
  useEffect(() => {
    if (isUpdatingContent) {
      fetchUsers();
      toggleUpdating(false);
    }
  }, [isUpdatingContent]);

  return (
    <>
      <h1 className='page-title'>Users</h1>
      <div className='users-container'>
        <table className='users-table'>
          <thead>
            <tr>
              {HEADERS.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <input disabled type='checkbox' checked={user.isAdmin} />
                </td>
                <td>
                  <UserControls user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
