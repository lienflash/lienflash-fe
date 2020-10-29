import React from 'react';
import './JobCard.scss';

function JobCard(props) {
const { client_company_name, total_cost, completion_date, job_id } = props.data

const endDate = completion_date;

const completionDate = `${endDate[5]}${endDate[6]}/${endDate[8]}${endDate[9]}/${endDate[2]}${endDate[3]}`

return (
  <article className={"job-card"}>
    <h2>{client_company_name}</h2>
    <h3>Amount Due: ${total_cost}</h3>
    <h3>Date of Substantial Completion: {completionDate}</h3>
    <h3>Days Left to Submit: {props.dateDifference}</h3>
  </article>
)

}

export default JobCard;
