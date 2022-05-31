import React from 'react';

import './LoginButton.css';

const LoginButton = (props) => {
  return (
    <a href={props.address} className="button-wrapper">
      <p>{props.name}</p> 
    </a>
  );
};

export default LoginButton;
