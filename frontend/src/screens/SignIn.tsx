import React, { useState, useEffect } from 'react';
import { signInService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signInService(credentials);

    //# Handle Sign In Failure
    if (!user) return navigate('sign-in');

    navigate('/students');
  };

  return (
    <div>
      <form className='sign-in form' onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type='email'
            name='email'
            placeholder='insert an email'
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          ></input>
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='insert a password'
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          ></input>
        </label>
        <button type='submit'>Sign In</button>
      </form>
      <p>
        New user? Create Account <a href='/sign-up'>Here</a>
      </p>
    </div>
  );
}

export default SignIn;
