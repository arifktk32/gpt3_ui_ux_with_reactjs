import React from 'react';
import './feature.scss';

export const Feature = ({ title, text }) => (
  <div className='flex feature'>
    <h1 className='feature__title'> {title} </h1>
    <p className='feature__text'> {text} </p>
  </div>
)

export default Feature;