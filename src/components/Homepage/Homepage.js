import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error';

import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../../helpers/apiCalls'
import { setJobs, getJobInfo, setErrorMsg, resetErrorMsg } from '../../actions/actions'

import 'balloon-css';

function Homepage({ updateJobAddedStatus, jobAdded }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const errorMsg = useSelector(state => state.errorMessage);
  const [isLoaded, updateLoadingStatus] = useState(false)

  useEffect(() => {
    setTimeout(updateLoadingStatus(true), 200)
  }, [])

  useEffect(() => {
      getAllJobs(user.id)
        .then(data => {
          dispatch(setJobs(data.data))
          dispatch(resetErrorMsg());
          updateJobAddedStatus(false)
          updateLoadingStatus(true)
        })
        .catch(error => {
          dispatch(setErrorMsg('Sorry, it looks like we are having some trouble retrieving your information. Refresh or try again later.'))
        })
  }, [ jobAdded ])

  return (
    <div className='homepage'>
      { !isLoaded &&
        <Loader />
      }
      {!isLoaded && errorMsg &&
        <>
          <Loader />
          <Error />
        </>
      }
      {isLoaded && user &&
        <>
          <h2 className='home-title'>What do you want to do?</h2>
          <Link to={'/addjob'}>
            <button className='home add'>Add Job
              <br /><i className="fas fa-tools"></i>
              </button>
          </Link>
          <Link to={'/eligiblejobs/grace-period'}>
            <button className='home eligible'>NOI Eligible Jobs
              <br /><i className="far fa-calendar-check"></i>
            </button>
          </Link>
          <Link to={'/filedjobs/lien-eligible'}>
            <button className='home filed'>Filed Liens
              <br /><i className="far fa-file-alt"></i>
            </button>
          </Link>
          <Link to={'/profile'}>
            <button className='home profile'>Profile
              <br /><i className="fas fa-user-alt"></i>
            </button>
          </Link>
          <button
            data-balloon-length='large'
            aria-label='Install on mobile: Open app in your native browser i.e. Safari for IOS. On the bottom toolbar click "Add to home screen".
            Install on desktop: Click on the icon at the top right of the URL bar.'
            data-balloon-pos='up'
            onClick={((e) => e.preventDefault())}
            className='install-info'>Install App
            <span><i className="fas fa-download"></i></span>
          </button>
        </>
      }
    </div>
  )
}

export default Homepage;
