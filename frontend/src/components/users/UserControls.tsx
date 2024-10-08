import './user-controls.css';
import Popup from '../controls/Popup';
import { User } from '../../classes/User';
import React, { useContext, useEffect, useState } from 'react';
import { updateUserApi } from '../../apis/users.api';
import { ControlsContext } from '../../context/ControlsContext';

function UserControls({ user }: { user: User }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);
  const [isAdmin, setIsAdmin] = useState(updatedUser.isAdmin);
  const { toggleUpdating } = useContext(ControlsContext);

  useEffect(() => {
    setUpdatedUser(user);
    return () => {
      setUpdatedUser(new User({}));
    };
  }, [updatedUser, isUpdating]);

  const saveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserApi(isAdmin, updatedUser.id);
    toggleUpdating(true);
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
      <Popup title='Update User' open={isUpdating} setOpen={setIsUpdating}>
        <form className='update-user-form' onSubmit={saveChanges}>
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
              id='cb1'
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
