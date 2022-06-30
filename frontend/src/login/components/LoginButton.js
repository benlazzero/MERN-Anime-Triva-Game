import React from 'react';

import './LoginButton.css';

const LoginButton = (props) => {

  const loginGoogle = async () => {
      console.log("in app fetch block");
      window.open('http://localhost:4000/auth/google/callback',
      "_self"
      )
  }


  return (
      <button id="login" className="button-wrapper" onClick={loginGoogle}>
        <p>{props.name}</p> 
      </button>
  );
};

export default LoginButton;
