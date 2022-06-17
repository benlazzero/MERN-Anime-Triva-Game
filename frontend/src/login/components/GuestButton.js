import React from 'react';

import './LoginButton.css';

const GuestButton = (props) => {
  

  return (
    <div>
      <button className="button-wrapper" onClick={props.logout}>
        <a href={props.address}>{props.name}</a> 
      </button>
    </div>
  );
};

export default GuestButton;
