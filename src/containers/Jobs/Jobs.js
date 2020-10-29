import React from 'react';
import './Jobs.scss';
import JobCard from '../../components/JobCard/JobCard';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Jobs() {
  const location = useLocation();
  const allJobs = useSelector(state => state.allJobs);

  const createJobCards = (jobsList) => {
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
    </div>
  )

}

export default Jobs;
