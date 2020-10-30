import React from 'react';
import './Jobs.scss';
import JobCard from '../../components/JobCard/JobCard';
import Error from '../../components/Error/Error.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setErrorMsg, resetErrorMsg } from '../../actions/actions.js';

function Jobs() {
  const location = useLocation();
  const dispatch = useDispatch();
  const errorMsg = useSelector(state => state.errorMessage);
  const allJobs = useSelector(state => state.allJobs);

  const createJobCards = (jobsList) => {
    if(jobsList === undefined) {
      dispatch(setErrorMsg(`Sorry, you have no jobs that are currently eligible. Please check again later.`))
      return;
    } else {
      dispatch(resetErrorMsg());
      return (
        jobsList.map(job => {
          return (
            <Link to={`/jobs/${job.attributes.status}/${job.id}`} className='job-card-link' key={job.id}>
              <JobCard data={job.attributes}/>
            </Link>
          )
        }).sort((a,b) => b.dateDifference - a.dateDifference)
      )
    }
  }

  const resetErrorMessage =() => {
    dispatch(resetErrorMsg())
  }

  return (
    <div className='jobs'>
    {location.pathname === "/eligiblejobs/grace-period" &&
        createJobCards(allJobs.gracePeriod)
    }
    {location.pathname === "/eligiblejobs/noi-eligible" &&
      createJobCards(allJobs.noiEligible)
    }
    {location.pathname === "/eligiblejobs/lien-eligible" &&
      createJobCards(allJobs.lienEligible)
    }
    {location.pathname === "/filed/processing" &&
      createJobCards(allJobs.inProcess)
    }
    {location.pathname === "/filed/release-eligible" &&
      createJobCards(allJobs.releaseEligible)
    }
    {errorMsg &&
      <Error message={errorMsg} />
    }
    </div>
  )

}

export default Jobs;
