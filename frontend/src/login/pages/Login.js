import React from 'react';

import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton';
import CurrentTime from '../components/CurrentTime';
import logo from '../../public/logo2.png';

import './Login.css';

const Login = (props) => {


  return (
    <div className="background-wrap">
      <div className="login-wrapper">
        <div className="time-wrapper">
          <CurrentTime />
        </div>
        <div className="interface-wrapper">
          <img src={logo} alt="logo spells name the anime" className="logo" />
          <span>Welcome, please make a selection.</span>
          <LoginButton className="login-btn" name="Sign in with Google" />
          <GuestButton className="guest-btn" user={props.user} name="Continue as a guest" address="/dashboard/guest" />  
        </div> 
      </div>
    </div>
  )
};

export default Login;
