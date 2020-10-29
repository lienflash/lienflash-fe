import React from 'react';
import './Jobs.scss';
import JobCard from '../../components/JobCard/JobCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Jobs() {

  const allJobs = useSelector(state => state.allJobs)

  const findDateDifference = (finalDate) => {
    const endDate = new Date(finalDate);
    const currentDate = new Date();
    const timeDifference = currentDate - endDate;
    const differenceInDays = timeDifference / (1000 * 3600 * 24);

    return Math.round(differenceInDays)
  }

  const finalList = allJobs.map(job => {
    return (
      <Link to={`/jobs/${job.id}`} key={job.id}>
        <JobCard data={job.attributes} dateDifference={findDateDifference(job.attributes.completion_date)}/>
      </Link>
    )
  })

  // if job.attributes.material_cost === 0,
  // then the timeline is 60 days for NOI
  // if material_cost>0, then timeline is 120 days
  // if NOI is filed, they have 10 days after that to file lien
  // if lien is filed, then it's in process
  // if lien is processed, it's eligible for releaseOfLien

  // sort jobs from oldest to newest

  return (
    <div className='jobs'>
      {finalList}
    </div>
  )

}

export default Jobs;
