import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'

function Header(props) {
  const { currentPath } = props;

  const handleClick = (event) => {
    if (event.target.nextSibling) {
      event.target.nextSibling.classList.remove('selected')
    } else if (event.target.previousElementSibling) {
      event.target.previousElementSibling.classList.remove('selected')
    }

    event.target.classList.add('selected')

    // need to also switch view to those cards; set button to be a link
  }

  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='lienflash logo'/>
      </Link>
        {currentPath !== undefined && currentPath === 'filed'&&
            <div onClick={handleClick}>
              <button className='in-process-btn'>In Process</button>
              <button className='release-lien-eligible-btn'>Release Eligible</button>
            </div>
        }
        {currentPath !== undefined && currentPath === 'eligible'&&
            <div onClick={handleClick}>
              <button className='noi-eligible-btn'>NOI Eligible</button>
              <button className='lien-eligible-btn'>Lien Eligible</button>
            </div>
        }
    </header>
  )
}

export default Header;
