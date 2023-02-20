import './Login.css';

import { useRef } from 'react';

import { useUser } from '../context/userContext';
const Login = () => {
  const { login } = useUser();
  const inputRef = useRef(null);
  return (
    <main className='login'>
    <div className='logindiv'>
      <h2>Log in to join our community!</h2>
      <input type="text" ref={inputRef} placeholder="Username" />
      <button
        onClick={() => {
          login(inputRef.current.value);
        }}
      >
        Log in
      </button>
      </div>
    </main>
  );
};

export default Login;
