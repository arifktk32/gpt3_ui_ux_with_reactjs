import React from 'react';
import './possibility.scss';
import PossibilityPhoto from '../../assets/images/possibility.png';

const Possibility = () => (
  <div className='container flex possibility'>
    <div className='possibility__photo'>
      <img src={PossibilityPhoto} alt='photo for The possibilities are beyond your imagination' />
    </div>
    <div className='possibility__content'>
      <p className='possibility__subtitle'>Request Early Access to Get Started</p>
      <h1 className='gradient__text possibility__title'>The possibilities are beyond your imagination</h1>
      <p className='copy'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <p className='possibility__subtitle'>Request Early Access to Get Started</p>
    </div>
  </div>
)

export default Possibility