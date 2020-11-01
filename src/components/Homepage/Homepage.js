import React from 'react';
import { Link } from 'react-router-dom';
import 'balloon-css'; 

function Homepage() {
  return (
    <div className='homepage'>
      <h2 className='home-title'>What do you want to do?</h2>
      <Link to={'/addjob'}>
        <button className='home add'>Add Job
          <br /><i class="fas fa-tools"></i>
          </button>
      </Link>
      <Link to={'/eligiblejobs/grace-period'}>
        <button className='home eligible'>NOI Eligible Jobs
          <br /><i class="far fa-calendar-check"></i>
        </button>
      </Link>
      <Link to={'/filedjobs/lien-eligible'}>
        <button className='home filed'>Filed Liens
          <br /><i class="far fa-file-alt"></i>
        </button>
      </Link>
      <Link to={'/profile'}>
        <button className='home profile'>Profile
          <br /><i class="fas fa-user-alt"></i>
        </button>
      </Link>
      <button
        data-balloon-length='large'
        aria-label='Install by opening app in your native browser i.e. Safari for IOS. On the bottom toolbar click the square with upward arrow and select "Add to home screen"'
        data-balloon-pos='up'
        onClick={((e) => e.preventDefault())}
        className='install-info'>Install App
        <span><i class="fas fa-download"></i></span>
      </button>
    </div>
  )
}

export default Homepage;
