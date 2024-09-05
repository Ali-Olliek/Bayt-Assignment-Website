import React, { useEffect, useState } from 'react';
import Popup from '../controls/Popup';
import { User } from '../../classes/User';
import { updateUserApi } from '../../apis/users.api';

function UserControls({ user }: { user: User }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    setUpdatedUser(user);
    return () => {
      setUpdatedUser(new User({}));
    };
  }, [user, isUpdating]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserApi(updatedUser.isAdmin, updatedUser.id);
    setIsUpdating(false);
  };

  return (
    <>
      <button onClick={() => setIsUpdating(true)}>update</button>
      <Popup open={isUpdating} setOpen={setIsUpdating}>
        <form onSubmit={saveChanges}>
          <label>
            Username
            <input
              disabled={true}
              onChange={handleUpdate}
              name='username'
              value={updatedUser.username}
            />
          </label>
          <label>
            Email
            <input
              disabled={true}
              onChange={handleUpdate}
              type='email'
              name='email'
              value={updatedUser.email}
            />
          </label>
          <label>
            Phone Number
            <input
              disabled={true}
              onChange={handleUpdate}
              name='phoneNumber'
              value={updatedUser.phoneNumber ?? ''}
            />
          </label>
          <label>
            Is Admin
            <input
              onChange={handleUpdate}
              name='isAdmin'
              type='radio'
              defaultChecked={updatedUser.isAdmin}
            />
          </label>
          <button type='submit'>save</button>
        </form>
      </Popup>
    </>
  );
}

export default UserControls;
