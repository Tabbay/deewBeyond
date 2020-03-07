import React, { useState } from 'react';
import '/Users/cerigoff/deew-beyond/src/components/styles/coverStrip.css';
import Button from '../Button';
import logo from '/Users/cerigoff/deew-beyond/src/images/deewLogo.png'



function CoverStrip() {
    var title = "DEEW BEYOND"
    var subtitle="SMOKING SOLUTIONS"

  return (
    <div className='cover-wrapper'>
        <div className='title'>
            <image src='/Users/cerigoff/deew-beyond/src/images/deewLogo.png' ></image>
            <h1 className='fontDeew'>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    </div>
  );
}

export default CoverStrip;