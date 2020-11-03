import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/lienflash-logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, clearJobs, resetErrorMsg } from '../../actions/actions';
import PropTypes from 'prop-types';

function Header(props) {
  const { currentPath } = props;
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.attributes)

  const clearError =() => {
    dispatch(resetErrorMsg())
  }

  const logout = () => {
    dispatch(logoutUser())
    dispatch(clearJobs())
  }

  return (
    <header>
      {user === undefined &&
        <Link to={'/'}>
          <img src={logo} className='logo' alt='lienflash logo'/>
        </Link>
      }
      {user !== undefined &&
        <>
          <Link to={'/homepage'} onClick={clearError}>
            <img src={logo} className='logo' alt='lienflash logo'/>
          </Link>
          <button onClick={logout}>Log Out</button>
        </>
      }
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

Header.propTypes = {
  currentPath: PropTypes.string
};
