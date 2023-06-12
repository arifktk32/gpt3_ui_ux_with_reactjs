import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';

export const Navbar = () => (
  <div className='container navbar__wrapper'>
    <div className="navbar__wrapper-left">
      <a className='logo ' href='#'><img src={logo} alt='GPT3 logo' /></a>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>What is GPT?</a></li>
        <li><a href='#'>Open AI</a></li>
        <li><a href='#'>Case Studies</a></li>
        <li><a href='#'>Library</a></li>
      </ul>
    </div>
    <div className="navbar__wrapper-right">
      <ul>
        <li><a href='#'>Sign in</a></li>
        <li className='active'><a href='#'>Sign up</a></li>
      </ul>
    </div>
  </div>
)

export default Navbar;