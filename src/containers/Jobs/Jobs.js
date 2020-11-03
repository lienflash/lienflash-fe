import React from 'react';
import './Jobs.scss';
import JobCard from '../JobCard/JobCard';
import Error from '../../components/Error/Error.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setErrorMsg, resetErrorMsg } from '../../actions/actions.js';
import PropTypes from 'prop-types';

function Jobs() {
  const location = useLocation();
  const dispatch = useDispatch();
  const errorMsg = useSelector(state => state.errorMessage);
  const allJobs = useSelector(state => state.allJobs);

  const createJobCards = (jobsList) => {
    if(jobsList === []) {
      dispatch(setErrorMsg(`Sorry, you have no jobs that are currently eligible. Please check again later.`))
      return;
    } else if(jobsList.length > 0) {
      dispatch(resetErrorMsg());
      return (
        jobsList.map(job => {
          return (
            <Link to={`/jobs/${job.attributes.status}/${job.attributes.dateDifference}/${job.id}`} className='job-card-link' key={job.id}>
              <JobCard data={job.attributes}/>
            </Link>
          )
        }).sort((a,b) => b.dateDifference - a.dateDifference)
      )
    }
  }

  return (
    <div className='jobs'>
    {errorMsg &&
      <Error message={errorMsg} />
    }
    {location.pathname === "/eligiblejobs/grace-period" &&
      createJobCards(allJobs.gracePeriod)
    }
    {location.pathname === "/eligiblejobs/noi-eligible" &&
      createJobCards(allJobs.noiEligible)
    }
    {location.pathname === "/filedjobs/lien-eligible" &&
      createJobCards(allJobs.lienEligible)
    }
    {location.pathname === "/filedjobs/release-eligible" &&
      createJobCards(allJobs.releaseEligible)
    }
    </div>
  )

}

export default Jobs;

Jobs.propTypes = {
  setErrorMsg: PropTypes.func,
  resetErrorMsg: PropTypes.func,
  errorMsg: PropTypes.string,
  allJobs: PropTypes.object,
};
