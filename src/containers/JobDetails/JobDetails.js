import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { updateJobStatus } from '../../helpers/apiCalls'
import { Redirect } from 'react-router-dom'
import UserMessage from '../../components/popup/Popup'
// need to add functionality to buttons and add tests for them

function JobDetails(props) {
  const jobInfo = useSelector(state => state.jobInfo.attributes);
  const { id }  = useSelector(state => state.jobInfo);

  // use if we want to redirect user back to homepage/dashboard
  const [updateSuccessful, updateStatus] = useState(false)
 
  const history = useHistory();
  const { job_type, job_site_name,
    job_site_contact_name,
    job_site_address, job_site_address_line_2, job_site_city, job_site_state, job_site_zip_code, completion_date,
    material_cost,
    labor_cost,
    total_cost,
    description_of_work,
    client_company_name,
    business_address, business_address_line_2, business_city, business_state, business_zip_code, additional_info, status, dateDifference } = jobInfo;
  
    const fillErrorMsg = () => {
    return (
      <h2>Sorry, it looks like we couldn't find that job. Please try again later.</h2>
    )
  }

  const handleClick = (status) => {
    const jobId = id
    updateJobStatus(jobId, status)
      .then(() => {
        console.log('processing')
        // take user back to jobs page or dashboard ?
        history.goBack()
        // updateStatus(true) for dashboard option
      })
      .catch(error => {
        alert('Sorry, we had an issue processing your request. Please refresh to try again.')
      })
  }

  const fillJobInfo = () => {
    return (
      <div className='job-details'>
        <button className='back-btn' onClick={() => { history.goBack() }}>
          Back
        </button>
        <h2>Job Details</h2>
          <h3 className='bold'>Job Site Name: </h3><p> {job_site_name}</p>
          <br />
          <h3 className='bold'>Job Site Contact Name: </h3> 
            <p>{job_site_contact_name}</p><br />

          {job_site_address_line_2 !== null &&
            <>
              <h3 className='bold'> Job Site Address: </h3>
              <br />
              <p>
                {job_site_address},{job_site_address_line_2}<br />{job_site_city}, {job_site_state}, {job_site_zip_code}
              </p>
            </>
          }
          {job_site_address_line_2 === null &&
            <>
              <h3 className='bold'> Job Site Address: </h3><br />
              <p>
                {job_site_address},<br />{job_site_city}, {job_site_state}, {job_site_zip_code}
              </p>
            </>
          }
          <br />

          <h3 className='bold'>Company Name: </h3>
            <p>{client_company_name ? client_company_name : "n/a"}</p>
          <br />
          {business_address !== null &&
            <>
              <h3 className='bold'> Business Address: </h3><br />
              <p>
                {business_address}<br />{business_address_line_2}<br />{business_city}, {business_state}, {business_zip_code}
              </p>
            </>
          }
          
        <h3 className='bold'>Job Type: </h3>
          <p>{job_type}</p><br />
        <h3 className='bold'>Job Description: </h3>
          <p>{description_of_work}</p><br />
        <h3 className='bold'>Additional Info: </h3>
          <p>{additional_info ? additional_info : "n/a"}</p><br />
        <h3 className='bold'>Date of Substantial Completion: </h3>
          <p>{completionDate}</p><br />
        <h3 className='bold'>Labor Cost: </h3>
          <p>{labor_cost ? `$${labor_cost}` : "n/a"}</p><br />
        <h3 className='bold'>Materials Cost: </h3>
          <p>{material_cost ? `$${material_cost}` : "n/a"}</p><br />
        <h3 className='bold'>Total Cost: </h3>
          <p>${total_cost}</p>

        <div>
          <UserMessage status={status} dateDifference={dateDifference} handleClick={handleClick}/>
        </div>
        {/* // take user back to dashboard if we like this option best */}
        { updateSuccessful && <Redirect to='/' />}
      </div>
    )
  }
  let completionDate;
  if(completion_date !== undefined) {
    const endDate = completion_date;
    completionDate = `${endDate[5]}${endDate[6]}/${endDate[8]}${endDate[9]}/${endDate[2]}${endDate[3]}`
  }
  return (
    <>
    {completion_date === undefined &&
      fillErrorMsg()
    }
    {completion_date !== undefined &&
      fillJobInfo()
    }
    </>
  )
}
export default JobDetails;

/* <div>
  {dateDifference > 10 &&
    <button className='btn-submit' onClick={() => handleClick(0)}>Submit NOI</button>
  }
  {status === 'NOI Eligible' &&
    <button className='btn-submit' onClick={() => handleClick(1)}>Submit NOI</button>
  }
  {status === 'NOI filed' &&
    <button className='btn-submit' onClick={() => handleClick(2)}>Submit Lien</button>
  }
  {status === 'Lien Filed' &&
    <button className='btn-submit' onClick={() => handleClick(3)}>Submit Release of Lien</button>
  }
  {/* When we have a status for this eligibilty, we will add this <button>Remove Job</button> */
  // <button className='btn-submit' onClick={() => removeJob(4)}>Remove Job</button>
  // {/*when they click this button, send patch request to change status to inactive; use 4 to pass that on*/}
// </div> */}