import React, { useState } from 'react';
import './infoStrip.css';

const InfoStrip = () =>{

  return (
    <div className='infoStrip-wrapper'>
      <div className='main'>
        <div className="column" style={{ background: "lightblue" }} />
        <div className="column" style={{ background: "#fcfcfc" }} />
      </div>
    </div>
  );
}
export default InfoStrip;
