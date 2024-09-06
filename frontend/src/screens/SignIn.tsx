import './screens.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInService } from '../services/AuthService';

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
    <div className='sign-in'>
      <form onSubmit={handleSignIn}>
        <div className='inputs'>
          <label>
            Email
            <input
              type='email'
              name='email'
              placeholder='Insert your email'
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            ></input>
          </label>
          <label>
            Password
            <input
              type='password'
              name='password'
              placeholder='Insert your password'
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            ></input>
          </label>
        </div>
        <div>
          <button type='submit'>Sign In</button>
        </div>
      </form>
      <p>
        New user? Create Account <a href='/sign-up'>Here</a>
      </p>
    </div>
  );
}

export default SignIn;
