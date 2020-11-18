import React from 'react';
import './JobCard.scss';
import PropTypes from 'prop-types';

function JobCard(props) {
  const { job_type, status, job_site_contact_name, total_cost, completion_date, dateDifference } = props.data

  const endDate = new Date(completion_date).getTime();

  const completionDate = new Date(endDate).toLocaleDateString("en-us")

  return (
    <article className={"job-card"}>
      <h2 className='cardHeader'>Job site contact: {job_site_contact_name}</h2>
      {(status === 'NOI Requested') &&
      <h3 className='flag'>Request for NOI submitted</h3>
      }
      <h3>Amount Due: ${total_cost}</h3>
      <h3>Date of Substantial Completion: {completionDate}</h3>
      {job_type === 'Labor' && (status === 'good standing' || status === 'NOI Eligible') &&
        <h3>Days Left to Submit NOI: {47 - dateDifference}</h3>
      }
      {job_type === 'Materials & Labor' && (status === 'Good Standing' || status === 'NOI Eligible') &&
        <h3>Days Left to Submit Lien: {106 - dateDifference}</h3>
      }
      {status === 'NOI Filed' &&
        <h3>Days Left to Submit Lien: {47 - dateDifference}</h3>
      }
    </article>
  )

}

export default JobCard;

JobCard.propTypes = {
  job_type: PropTypes.string,
  status: PropTypes.string,
  job_site_contact_name: PropTypes.string,
  total_cost: PropTypes.number,
  completion_date: PropTypes.string,
  dateDifference: PropTypes.number
};
