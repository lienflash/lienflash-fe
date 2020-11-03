import React from 'react';
//import './LandingPage.scss';
import logo from '../../assets/lienflash-logo.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingPage() {

  return(
    <div>
      <h1>Welcome to LienFlash!</h1>
      <img src={logo} className='logo' alt='lienflash logo'/>
      <h2>Please login to continue</h2>
        <button className='primary-btn'>Create Account</button>
      <Link to={'/login'}>
        <button className='primary-btn'>Login</button>
      </Link>
    </div>
  )

}

export default LandingPage;
