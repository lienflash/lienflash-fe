import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// need to add functionality to buttons and add tests for them

function JobDetails(props) {
  const jobInfo = useSelector(state => state.jobInfo.attributes);
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
  const fillJobInfo = () => {
    return (
      <div className='job-details'>
        <button className='back-btn' onClick={() => { history.goBack() }}>
          Back
        </button>
        <h2>Job Details</h2>
          <h3 className='bold'>Job Site Name:</h3><p> {job_site_name}</p>
          <br />
          <h3 className='bold'>Job Site Contact Name:</h3>
            <p>{job_site_contact_name}</p><br />

          {job_site_address_line_2 !== null &&
            <>
              <h3 className='bold'> Job Site Address:</h3>
              <br />
              <p>
                {job_site_address},{job_site_address_line_2}<br />{job_site_city}, {job_site_state}, {job_site_zip_code}
              </p>
            </>
          }
          {job_site_address_line_2 === null &&
            <>
              <h3 className='bold'> Job Site Address:</h3><br />
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
              <h3 className='bold'> Business Address:</h3><br />
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
        {/* buttons depending on where in the process they are */}
        <div>
          {dateDifference > 10 &&
            <button className='btn-submit'>Submit NOI</button>
          }
          {status === 'NOI Eligible' &&
            <button className='btn-submit'>Submit NOI</button>
          }
          {status === 'NOI filed' &&
            <button className='btn-submit'>Submit Lien</button>
          }
          {status === 'Lien Filed' &&
            <button className='btn-submit'>Submit Release of Lien</button>
          }
          {/* When we have a status for this eligibilty, we will add this <button>Remove Job</button> */}
          <button className='btn-submit'>Remove Job</button>
          {/*when they click this button, send patch request to change status to inactive; use 4 to pass that on*/}
        </div>
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

JobDetails.propTypes = {
  jobInfo: PropTypes.object,
  job_type: PropTypes.string,
  job_site_name: PropTypes.string,
  job_site_contact_name: PropTypes.string,
  job_site_address: PropTypes.string,
  job_site_address_line_2: PropTypes.string,
  job_site_city: PropTypes.string,
  job_site_state: PropTypes.string,
  job_site_zip_code: PropTypes.string,
  completion_date: PropTypes.string,
  material_cost: PropTypes.number,
  labor_cost: PropTypes.number,
  total_cost: PropTypes.number,
  description_of_work: PropTypes.string,
  client_company_name: PropTypes.string,
  business_address: PropTypes.string,
  business_address_line_2: PropTypes.string,
  business_city: PropTypes.string,
  business_state: PropTypes.string,
  business_zip_code: PropTypes.string,
  additional_info: PropTypes.string,
  status: PropTypes.string,
  dateDifference: PropTypes.number
}
