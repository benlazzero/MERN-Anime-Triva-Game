import React from 'react';

import LoginButton from '../components/LoginButton';
import './Login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <p>welcome to</p>
      <h1>ANICHAR<br />TRIVIA</h1>
      <LoginButton name="(G) Sign in with Google" address="/google" />
      <span>OR</span>
      <LoginButton name="Continue as a guest" address="/dashboard/guest" />
    </div>
  )
};

export default Login;
