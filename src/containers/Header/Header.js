import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'

// need to figure out conditional logic to display buttons and adjust logo when on different views

function Header() {
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='lienflash logo'/>
      </Link>
    </header>
  )
}

export default Header;
