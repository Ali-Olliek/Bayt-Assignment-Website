import './user-controls.css';
import Popup from '../controls/Popup';
import { User } from '../../classes/User';
import React, { useEffect, useState } from 'react';
import { updateUserApi } from '../../apis/users.api';

function UserControls({ user }: { user: User }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);
  const [isAdmin, setIsAdmin] = useState(updatedUser.isAdmin);

  useEffect(() => {
    setUpdatedUser(user);
    return () => {
      setUpdatedUser(new User({}));
    };
  }, [updatedUser, isUpdating]);

  const saveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserApi(isAdmin, updatedUser.id);
    setIsUpdating(false);
  };

  return (
    <>
      <button
        className='user-action update'
        onClick={() => setIsUpdating(true)}
      >
        update
      </button>
      <Popup open={isUpdating} setOpen={setIsUpdating}>
        <form onSubmit={saveChanges}>
          <label>
            Username
            <input
              disabled={true}
              name='username'
              value={updatedUser.username}
            />
          </label>
          <label>
            Email
            <input
              disabled={true}
              type='email'
              name='email'
              value={updatedUser.email}
            />
          </label>
          <label>
            Phone Number
            <input
              disabled={true}
              name='phoneNumber'
              value={updatedUser.phoneNumber ?? ''}
            />
          </label>
          <label>
            Is Admin
            <input
              onChange={(e) => setIsAdmin(e.target.checked)}
              name='isAdmin'
              type='checkbox'
              checked={isAdmin}
            />
          </label>
          <button type='submit'>save</button>
        </form>
      </Popup>
    </>
  );
}

export default UserControls;
