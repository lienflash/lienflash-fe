import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setJobDetails } from '../../actions/actions.js';
import { getJobDetails } from '../../helpers/apiCalls'

function JobDetails(props) {
  const { job_type, job_site_name,
    job_site_contact_name,
    job_site_address, job_site_address_line_2, job_site_city, job_site_state, job_site_zip_code, completion_date,
    material_cost,
    labor_cost,
    total_cost,
    description_of_work,
    client_company_name,
    business_address, business_address_line_2, business_city, business_state, business_zip_code, additional_info,
    job_id } = props.data;
  const { dateDifference } = props.dateDifference;

  return (
    <div className='job-details'>
      <h2>Job Details</h2>
      <h3>Job Site Name: {job_site_name}</h3>
      <h3> Job Site Contact Name: {job_site_contact_name}</h3>
      <h3> Job Site Address:<br />{job_site_address}<br />{job_site_address_line_2}<br />{job_site_city}, {job_site_state}, {job_site_zip_code}</h3>
      <h3>Company Name: {client_company_name}</h3>
      <h3> Business Address:<br />{business_address}<br />{business_address_line_2}<br />{business_city}, {business_state}, {business_zip_code}</h3>
      // phone #
      // email
      <h3>Job ID: {job_id}</h3>
      <h3>Job Type: {job_type}</h3>
      <h3>Job Description: {description_of_work}</h3>
      <h3>Additional Info: {additional_info}</h3>
      <h3>Date of Substantial Completion: {completion_date}</h3>
      <h3>Labor Cost: {labor_cost}</h3>
      <h3>Materials Cost: {material_cost}</h3>
      <h3>Total Cost: {total_cost}</h3>
      // buttons depending on where in the process they are
      <button>Remove Job</button>
    </div>
  )
}

export default JobDetails;
