import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'
import { useDispatch } from 'react-redux';
import { logoutUser, clearJobs, resetErrorMsg } from '../../actions/actions';
import PropTypes from 'prop-types';

function Header(props) {
  const { currentPath } = props;
  const dispatch = useDispatch()

  const clearError =() => {
    dispatch(resetErrorMsg())
  }

  const logout = () => {
    dispatch(logoutUser())
    dispatch(clearJobs())
    localStorage.removeItem('token')
  }

  return (
    <header>
      {currentPath === 'no-user' &&
        <Link to={'/'}>
          <img src={logo} className='logo' alt='lienflash logo'/>
        </Link>
      }
      {currentPath === 'admin' &&
        <>
          <Link to={'/admin-homepage'} onClick={clearError}>
            <img src={logo} className='logo' alt='lienflash logo' />
          </Link>
          <button className='btn logout' onClick={logout}>Log Out</button>
        </>
      }
      {currentPath === 'user' &&
        <>
          <Link to={'/homepage'} onClick={clearError}>
            <img src={logo} className='logo' alt='lienflash logo'/>
          </Link>
          <button className='btn logout' onClick={logout}>Log Out</button>
        </>
      }
        {currentPath === 'filed'&&
        <>
          <Link to={'/homepage'} onClick={clearError}>
            <img src={logo} className='logo' alt='lienflash logo'/>
          </Link>
          <button className='btn logout' onClick={logout}>Log Out</button>
          <div>
            <NavLink to={"/filedjobs/lien-eligible"} className='nav-button' activeClassName="selected" onClick={clearError}>
            Lien Eligible
            </NavLink>
            <NavLink to={'/filedjobs/release-eligible'} className='nav-button' activeClassName="selected" onClick={clearError}>
              Release Eligible
            </NavLink>
          </div>
        </>
        }
        {currentPath === 'eligible'&&
          <>
            <Link to={'/homepage'} onClick={clearError}>
              <img src={logo} className='logo' alt='lienflash logo' />
            </Link>
            <button className='btn logout' onClick={logout}>Log Out</button>
            <div>
              <NavLink to={'/eligiblejobs/grace-period'} className='nav-button' activeClassName="selected" onClick={clearError}>
                Grace Period
              </NavLink>
              <NavLink to={"/eligiblejobs/noi-eligible"} className='nav-button' activeClassName="selected" onClick={clearError}>
                NOI Eligible
              </NavLink>
            </div>
          </>
        }
    </header>
  )
}

export default Header;

Header.propTypes = {
  currentPath: PropTypes.string
};
