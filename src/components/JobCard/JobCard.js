import React from 'react';
import './JobCard.scss';

function JobCard(props) {
  const { client_company_name, total_cost, completion_date, job_id, dateDifference } = props.data

  const endDate = new Date(completion_date).getTime();

  const completionDate = new Date(endDate).toLocaleDateString("en-us")

  return (
    <article className={"job-card"}>
      <h2>{client_company_name}</h2>
      <h3>Amount Due: ${total_cost}</h3>
      <h3>Date of Substantial Completion: {completionDate}</h3>
      <h3>Days Left to Submit: {dateDifference}</h3>
    </article>
  )

}

export default JobCard;
