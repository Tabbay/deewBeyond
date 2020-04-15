import React, { useState } from 'react';
import side from '../../images/bp.jpg';
import './InfoStrip.css';

const InfoStrip = () => {
    return (
        <div className='infoStrip-wrapper'>
            <div className='info-col'>
              <img className="side-img" src={side} alt="Logo" />
            </div>
            <div className='info-col'>
                <h2 className="inforText"> We seek to eradicate the stigmas associated with smoking by providing a 100% all natural product that rejuvenates, re-hydrates, and replenishes your lips.
                </h2>

                <div className="buyNowWrap">
                    <button className="buyButt"> BUY NOW </button>
                </div>
           </div>
           <div className='info-col'> </div>
        </div>
    );
};
export default InfoStrip;
