import React from 'react';
import './JobCard.scss';
import PropTypes from 'prop-types';

function JobCard(props) {
  const { job_type, status, client_company_name, total_cost, completion_date, dateDifference } = props.data

  const endDate = new Date(completion_date).getTime();

  const completionDate = new Date(endDate).toLocaleDateString("en-us")

  return (
    <article className={"job-card"}>
      <h2>{client_company_name}</h2>
      <h3>Amount Due: ${total_cost}</h3>
      <h3>Date of Substantial Completion: {completionDate}</h3>
      {job_type === 'Labor' && (status === 'good standing' || status === 'NOI Eligible') &&
        <h3>Days Left to Submit NOI: {47 - dateDifference}</h3>
      }
      {job_type === 'Materials & Labor' && (status === 'good standing' || status === 'NOI Eligible') &&
        <h3>Days Left to Submit NOI: {106 - dateDifference}</h3>
      }
      {status === 'NOI filed' &&
        <h3>Days Left to Submit Lien: {47 - dateDifference}</h3>
      }
    </article>
  )

}

export default JobCard;

JobCard.propTypes = {
  job_type: PropTypes.string,
  status: PropTypes.string,
  client_company_name: PropTypes.string,
  total_cost: PropTypes.number,
  completion_date: PropTypes.string,
  dateDifference: PropTypes.number
};
