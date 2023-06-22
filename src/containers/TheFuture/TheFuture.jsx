import React from 'react';
import { Feature } from '../../components';
import featuresArray from './features';
import './thefuture.scss';

const TheFuture = () => (
  <div className='container flex future'>
    <div className='future__left'>
      <h1 className='gradient__text future__title'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p className='future__subtitle'>Request Early Access to Get Started</p>
    </div>
    <div className='future__right'>
      {featuresArray.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
)

export default TheFuture;