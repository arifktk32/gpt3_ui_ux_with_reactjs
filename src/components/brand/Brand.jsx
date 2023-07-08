import React from 'react';
import './brand.scss';
import { google, slack, atlassian, dropbox, shopify } from './logos.js'

export const Brand = () => (
  <div className='container brands' id='brands'>
    <ul className='flex'>
      <li>
        <a href='#'>
          <img src={google} alt='Google logo' />
        </a>
      </li>
      <li>
        <a href='#'>
          <img src={slack} alt='Slack logo' />
        </a>
      </li>
      <li>
        <a href='#'>
          <img src={atlassian} alt='Atlassian logo' />
        </a>
      </li>
      <li>
        <a href='#'>
          <img src={dropbox} alt='Dropbox logo' />
        </a>
      </li>
      <li>
        <a href='#'>
          <img src={shopify} alt='Shopify logo' />
        </a>
      </li>
    </ul>
  </div>
)

export default Brand;