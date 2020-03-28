import React, { useState } from 'react';
import '../../components/styles/coverStrip.css';
import Button from '../Button';
import deewLogo from '../../images/deewLogo.png';



function CoverStrip() {
    var title = "DEEW BEYOND"
    var subtitle="SMOKING SOLUTIONS"

  return (
    <div className='cover-wrapper'>
        <div className='title'>
            <image src={deewLogo} ></image>
            <h1 className='fontDeew'>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    </div>
  );
}

export default CoverStrip;
