import React from 'react';
import './footer.scss';
import logo from '../../assets/images/logo.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__cta'>
        <h2 className='footer__cta-heading gradient__text'>Do you want to step in to the future before others</h2>
        <button className='footer__cta-button'>Request Early Access</button>
      </div>
      <div className='flex footer__navigation'>
        <div className='footer__navigation-col1'>
          <img src={logo} alt='footer logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__navigation-col2'>
          <h3>Links</h3>
          <ul>
            <li><a href='#'>Overons</a></li>
            <li><a href='#'>Social Media</a></li>
            <li><a href='#'>Counters</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer__navigation-col3'>
          <h3>Company</h3>
          <ul>
            <li><a href='#'>Terms & Conditions</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer__navigation-col4'>
          <h3>Get in touch</h3>
          <ul>
            <li><p>Crechterwoord K12<br />182 DK Alknjkcb</p></li>
            <li><a href='tel:085-132567'>085-132567</a></li>
            <li><a href='mailto:info@payme.net'>info@payme.net</a></li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer