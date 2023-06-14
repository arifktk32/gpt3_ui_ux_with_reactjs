import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.scss';

const Header = () =>  (
  <div className='container header__banner'>
    <h1 className='gradient-text header__banner-title'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
    <p className='header__banner-para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    <form name='request-access' id='request-access'>
      <input type='email' name='request-access-email' placeholder='Your Email Address' />
      <button type='submit'>Get Started</button>
    </form>
    <div className='flex header__banner-people'>
      <img src={people} alt='Image of People that already requested access' />
      <p>1,600 people requested access a visit in last 24 hours</p>
    </div>
    <div className='header__banner-image'>
      <img src={ai} alt='Banner Image' />
    </div>
  </div>
)

export default Header