import React from 'react';
import { Feature } from '../../components';
import featuresArray from './features';

const TheFuture = () => (
  <div className='container'>
    <div>
      <h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div>
      {featuresArray.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
)

export default TheFuture;