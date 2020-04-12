import React, { useState } from 'react';
import './infoStrip.css';

const InfoStrip = props =>{

  return (
    <div className='infoStrip-wrapper'>
      <div className="row">
          <div className="column left">
              <h1>WWF</h1>
              <p>The World Wide Fund for Nature (WWF) is....</p>
          </div>

          <div className="column right" >
              <h4>Epcot Center</h4>
              <p>The Epcot Center is a theme park in Disney World, Florida.</p>
          </div>
      </div>
    </div>
  );
}
export default InfoStrip;
