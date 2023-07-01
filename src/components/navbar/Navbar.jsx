import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/images/logo.svg';
import './navbar.scss';

export const Navbar = () => (
  <div className='container flex navbar'>
    <div className="flex navbar__left">
      <a className='logo' href='#'><img src={logo} alt='GPT3 logo' /></a>
      <ul className='flex'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>What is GPT?</a></li>
        <li><a href='#'>Open AI</a></li>
        <li><a href='#'>Case Studies</a></li>
        <li><a href='#'>Library</a></li>
      </ul>
    </div>
    <div className="flex navbar__right">
      <ul className='flex navbar__right-account'>
        <li><a href='#'>Sign in</a></li>
        <li className='active'><a href='#'>Sign up</a></li>
      </ul>
      <RiMenu3Line className='navbar__hamburger-button' color='#fff' size='27' style={{marginLeft: "1rem"}} />
    </div>
  </div>
)

export default Navbar;