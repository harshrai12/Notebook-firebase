import React, { useRef } from 'react';
import { auth } from '../../config/fbconfig';
import { useHistory } from 'react-router-dom';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory(); // Initialize history

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        // Navigate to /login page
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <form action="">
        <h1>Log In</h1>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button className='btn green' onClick={login}>
          login In
        </button>
      </form>
    </div>
  );
}

export default Login;

