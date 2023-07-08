import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/logo.svg';
import './navbar.scss';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <ul className='flex'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#what-gpt3'>What is GPT?</a></li>
      <li><a href='#the-future'>Case Studies</a></li>
      <li><a href='#possibility'>Open AI</a></li>
      <li><a href='#blog'>Library</a></li>
    </ul>
  );

  return (
    <div className='container flex navbar'>
      <div className="flex navbar__left">
        <a className='logo' href='#'><img src={logo} alt='GPT3 logo' /></a>
        <Menu />
      </div>
      <div className="flex navbar__right">
        <ul className='flex navbar__right-account'>
          <li><a href='#'>Sign in</a></li>
          <li className='active'><a href='#'>Sign up</a></li>
        </ul>
        {toggleMenu ? <RiCloseLine className='navbar__hamburger-button' color='#fff' size='27' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='navbar__hamburger-button' color='#fff' size='27' onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className='navbar__mobilemenu'>
            <Menu />
            <ul className='navbar__mobilemenu-sign'>
              <li><a href='#'>Sign in</a></li>
              <li className='active'><a href='#'>Sign up</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;