import React, {useState} from 'react';
import './styles/button.css';

function Button(props) { 

  
  var label="Logout"

  return (
    <div className='btn-wrapper' onClick={console.log("Signing In")}>
        {props.label}
    </div>
  );
}

export default Button;
