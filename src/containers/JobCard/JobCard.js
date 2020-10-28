import React from 'react';

function JobCard(props) {
const { company_name, labor_cost, material_cost, date_of_completion, job_id } = props.data

const endDate = date_of_completion

const completionDate = `${endDate[5]}${endDate[6]}/${endDate[8]}${endDate[9]}/${endDate[2]}${endDate[3]}`

return (
  <article className={`${job_id} job-card`}>
    <h2>{company_name}</h2>
    <h3>Amount Due: ${labor_cost + material_cost}</h3>
    <h3>Date of Substantial Completion: {completionDate}</h3>
    <h3>Days Left to Submit: {props.dateDifference}</h3>
  </article>
)

}

export default JobCard;
