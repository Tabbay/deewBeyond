import React, { useState } from 'react';
import CoverStrip from '../CoverStrip/CoverStrip';
import InfoStrip from '../InfoStrip/InfoStrip';
import AboutUsStrip from '../AboutUs/AboutUsStrip';


const Home = props =>{

  return (
    <div className= ''>
        <CoverStrip/>
        <InfoStrip/>
        <AboutUsStrip/>
    </div>
  );
}

export default Home;
