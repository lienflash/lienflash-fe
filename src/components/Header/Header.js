import React, { useState } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'

function Header(props) {
  const { currentPath } = props;

  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='lienflash logo'/>
      </Link>
        {currentPath !== undefined && currentPath === 'filed'&&
            <div>
              <NavLink to={"/filedjobs/lien-eligible"} className='nav-button' activeClassName="selected">
              Lien Eligible
              </NavLink>
              <NavLink to={'/filedjobs/release-eligible'} className='nav-button' activeClassName="selected">
                Release Eligible
              </NavLink>
            </div>
        }
        {currentPath !== undefined && currentPath === 'eligible'&&
            <div>
              <NavLink to={'/eligiblejobs/grace-period'} className='nav-button' activeClassName="selected">
                Grace Period
              </NavLink>
              <NavLink to={"/eligiblejobs/noi-eligible"} className='nav-button' activeClassName="selected">
                NOI Eligible
              </NavLink>
            </div>
        }
    </header>
  )
}

export default Header;
