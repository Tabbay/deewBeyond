import React from 'react';
import './AboutUsStrip.css';
import sisters from '../../images/blacksisters.jpeg';

const AboutUsStrip = () => {
  return (
    <div className='AboutUs-Wrapper'>
    <div className='home-main'>
                <div className = 'column'> </div>
                <div className = 'column'>
                    <div className = 'middle-info'>
                        <h2 className='About-Title'> About Us </h2>
                        <h4 className='AboutText'> From the Nation's Capital, two sisters created an innovative lip care product, Deewbeyond, to protect your personal choice by restoring the natural color of your lips which may have darkened due to smoking. </h4>
                        <h4 className='AboutText-sub'> Deewbeyond will be the source of those who want to engage in smoking, but need a way to help others from noticing their habits. It's a fact, smoking anything will have an affect.
                          The heat of the smoke causes discoloration and hyperpigmentation.
                        </h4>
                        <div className='greenLine'> </div>
                    </div>
                </div>
                <div className = 'column'> </div>

    </div>
    </div>
  );
}

export default AboutUsStrip;
