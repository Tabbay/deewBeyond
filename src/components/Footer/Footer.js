import React, { useState } from 'react';
import './Footer.css';

const Footer = () =>{

  return (
    <div className='footer-wrapper'>
        <div className="f-col"> Terms & Conditions </div>
        <div className="f-col">  Shipping Details </div>
        <div className="f-col"> Return policy </div>
    </div>
  );
}

export default Footer;
