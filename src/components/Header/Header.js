import React, { useState } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'

function Header(props) {
  const { currentPath } = props;
  //const [ highlight, setHighlight] = useState("")

  const handleClick = (event) => {

    // first click is changing to selected, but won't change color till second click
    console.log("sibling ",event.target.nextSibling)
    console.log("sibling ", event.target.previousElementSibling)
    if (event.target.nextSibling) {
      event.target.nextSibling.classList.remove('selected')
    } else if (event.target.previousElementSibling) {
      event.target.previousElementSibling.classList.remove('selected')
   }

    event.target.classList.add('selected')
  }
  // need to fix styling of grace period button
  // need to fix button highlighting, no longer works

  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='lienflash logo'/>
      </Link>
        {currentPath !== undefined && currentPath === 'filed'&&
            <div>
              <NavLink to={'/filedjobs/processing'} className='nav-button' activeClassName="selected">
                In Process
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
              <NavLink to={"/eligiblejobs/lien-eligible"} className='nav-button' activeClassName="selected">
                Lien Eligible
              </NavLink>
            </div>
        }
    </header>
  )
}

export default Header;
