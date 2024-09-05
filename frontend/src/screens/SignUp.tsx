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
    <div>
      <form className='sign-in form' onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            placeholder='insert an username'
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </label>
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
          />
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
          />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Have an account? Sign In <a href='/sign-in'>Here</a>
      </p>
    </div>
  );
}

export default SignUp;
