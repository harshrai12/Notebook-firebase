import React, { useRef } from 'react';
import { auth } from '../../config/fbconfig';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory(); // Initialize history

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        // Navigate to /login page
        history.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <form action="">
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button className='btn green' onClick={signUp}>
          Sign In
        </button>
        <p>Already signed in ? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
};

export default Signin;

    