import React from 'react';

import './LoginButton.css';
import gLogo from '../../public/glogo.png';

const LoginButton = (props) => {

  const loginGoogle = async () => {
      console.log("in app fetch block");
      window.open('http://localhost:4000/auth/google/callback',
      "_self"
      )
  }


  return (
      <button id="login" className="button-wrapper" onClick={loginGoogle}>
        <img src={gLogo} alt="google logo" /> 
        <p>{props.name}</p> 
      </button>
  );
};

export default LoginButton;
