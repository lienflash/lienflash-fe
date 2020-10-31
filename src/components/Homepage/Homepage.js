import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='homepage'>
      <h2 className='home-title'>What Do You Want To Do?</h2>
      <Link to={'/addjob'}>
        <button className='home add'>Add Job</button>
      </Link>
      <Link to={'/eligiblejobs/grace-period'}>
        <button className='home eligible'>Eligible Jobs</button>
      </Link>
      <Link to={'/filedjobs/lien-eligible'}>
        <button className='home filed'>Filed Liens</button>
      </Link>
      <Link to={'/profile'}>
        <button className='home profile'>Profile</button>
      </Link>
    </div>
  )
}

export default Homepage;
