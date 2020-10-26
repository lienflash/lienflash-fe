import React from 'react';
import './Jobs.scss';
import JobCard from '../JobCard/JobCard';
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
      <JobCard data={job.attributes} dateDifference={findDateDifference(job.attributes.date_of_completion)} key={job.attributes.job_id}/>
    )
  })

  // if job.attributes.material_cost === 0,
  // then the timeline is 60 days for NOI
  // if material_cost>0, then timeline is 120 days
  // if NOI is filed, they have 10 days after that to file lien
  // if lien is filed, then it's in process
  // if lien is processed, it's eligible for releaseOfLien

  function handleClick(event) {
    // on click of card, call for that job's info and display it
    // console.log(event.target.parentNode.className)
    // console.log("Article: ", event.target.className)
  }

  return (
    <div className='jobs' onClick={handleClick}>
      {finalList}
    </div>
  )

}

export default Jobs;
