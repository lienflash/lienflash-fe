import React, { useEffect } from 'react';
import Error from '../Error/Error';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function JobDetails(props) {
  const jobInfo = useSelector(state => state.jobInfo);
  const history = useHistory();

  const { job_type, job_site_name,
    job_site_contact_name,
    job_site_address, job_site_address_line_2, job_site_city, job_site_state, job_site_zip_code, completion_date,
    material_cost,
    labor_cost,
    total_cost,
    description_of_work,
    client_company_name,
    business_address, business_address_line_2, business_city, business_state, business_zip_code, additional_info,
    job_id, status } = jobInfo.attributes;

  const endDate = completion_date;

  const completionDate = `${endDate[5]}${endDate[6]}/${endDate[8]}${endDate[9]}/${endDate[2]}${endDate[3]}`

  return (
    <>
    {jobInfo === undefined &&
      <Error message={'Sorry, it looks like we couldn\'t find that job. Please try again later.'} />
    }
    {jobInfo !== {} &&
      <div className='job-details'>
        <button onClick={() => { history.goBack() }}>
          Back
        </button>
        <h2>Job Details</h2>
        <h3>Job Site Name: {job_site_name}</h3>
        <h3> Job Site Contact Name: {job_site_contact_name}</h3>
        {job_site_address_line_2 !== null &&
          <h3> Job Site Address:<br />{job_site_address},<br />{job_site_address_line_2},<br />{job_site_city}, {job_site_state}, {job_site_zip_code}</h3>
        }
        {job_site_address_line_2 === null &&
          <h3> Job Site Address:<br />{job_site_address},<br />{job_site_city}, {job_site_state}, {job_site_zip_code}</h3>
        }
        <h3>Company Name: {client_company_name}</h3>
        {business_address !== null &&
          <h3> Business Address:<br />{business_address}<br />{business_address_line_2}<br />{business_city}, {business_state}, {business_zip_code}</h3>
        }
        <h3>Job Type: {job_type}</h3>
        <h3>Job Description:<br /> {description_of_work}</h3>
        <h3>Additional Info:<br /> {additional_info}</h3>
        <h3>Date of Substantial Completion:<br /> {completionDate}</h3>
        <h3>Labor Cost: ${labor_cost}</h3>
        <h3>Materials Cost: ${material_cost}</h3>
        <h3>Total Cost: ${total_cost}</h3>
        {/* buttons depending on where in the process they are */}
        {status === 'good standing' &&
          <button>Submit NOI</button>
        }
        {status === 'NOI Eligible' &&
          <button>Submit NOI</button>
        }
        {status === 'Lien Eligible' &&
          <button>Submit Release of Lien</button>
        }
        {/* When we have a status for this eligibilty, we will add this <button>Remove Job</button> */}
        <button>Remove Job</button>
        {/*when they click this button, send patch request to change status to inactive; use 4 to pass that on*/}
      </div>
    }
    </>
  )
}

export default JobDetails;
