import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'
import { useDispatch } from 'react-redux';
import { resetErrorMsg } from '../../actions/actions';

function Header(props) {
  const { currentPath } = props;
  const dispatch = useDispatch()

  const clearError =() => {
    dispatch(resetErrorMsg())
  }

  return (
    <header>
      <Link to={'/'} onClick={clearError}>
        <img src={logo} className='logo' alt='lienflash logo'/>
      </Link>
        {currentPath !== undefined && currentPath === 'filed'&&
            <div>
              <NavLink to={"/filedjobs/lien-eligible"} className='nav-button' activeClassName="selected" onClick={clearError}>
              Lien Eligible
              </NavLink>
              <NavLink to={'/filedjobs/release-eligible'} className='nav-button' activeClassName="selected" onClick={clearError}>
                Release Eligible
              </NavLink>
            </div>
        }
        {currentPath !== undefined && currentPath === 'eligible'&&
            <div>
              <NavLink to={'/eligiblejobs/grace-period'} className='nav-button' activeClassName="selected" onClick={clearError}>
                Grace Period
              </NavLink>
              <NavLink to={"/eligiblejobs/noi-eligible"} className='nav-button' activeClassName="selected" onClick={clearError}>
                NOI Eligible
              </NavLink>
            </div>
        }
    </header>
  )
}

export default Header;
