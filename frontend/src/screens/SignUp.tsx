import React, { useState } from 'react';
import { signUpService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUpService(credentials);

    if (!user) return setCredentials({ username: '', email: '', password: '' });

    navigate('/students');
  };

  return (
    <div className='sign-up'>
      <form onSubmit={handleSignUp}>
        <div className='inputs'>
          <label>
            Username
            <input
              autoComplete='username'
              type='text'
              name='username'
              placeholder='Insert an username'
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              placeholder='Insert an email'
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </label>
          <label>
            Password
            <input
              type='password'
              name='password'
              placeholder='Insert a password'
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
      <p>
        Alread have an account? Sign In <a href='/sign-in'>Here</a>
      </p>
    </div>
  );
}

export default SignUp;
