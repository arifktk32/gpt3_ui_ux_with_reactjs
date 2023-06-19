import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.scss';
import featuresData from './features.js';

const WhatGPT3 = () => (
  <div className='container wgpt3'>
    <div className='wgpt3__row1'>
      <Feature title={featuresData[0].title} text={featuresData[0].text} />
    </div>
    <div className='flex wgpt3__row2'>
      <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className='flex wgpt3__row3'>
      {featuresData.slice(1).map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
)

export default WhatGPT3