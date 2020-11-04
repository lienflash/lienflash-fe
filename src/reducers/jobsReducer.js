const jobsReducer = (state={}, action) => {
  switch(action.type) {
    case 'ALL_JOBS':
      return action.allJobs.reduce((acc, job) => {
        job.attributes.dateDifference = findDateDifference(job.attributes.completion_date)

      if (job.attributes.dateDifference < 11 && job.attributes.status === 'Good Standing') {
        acc.gracePeriod.push(job)
      }

      if(job.attributes.job_type === 'Labor'){
        if (job.attributes.dateDifference > 10 && (job.attributes.status === 'NOI Eligible' || job.attributes.status === 'NOI Requested' ||
        job.attributes.status === 'Good Standing')) {
          acc.noiEligible.push(job)
        } else if (job.attributes.status === 'NOI Filed') {
          acc.lienEligible.push(job)
        } else if (job.attributes.status === 'Lien Filed') {
          acc.releaseEligible.push(job)
        }
      } else if (job.attributes.job_type === 'Materials & Labor')
        if (job.attributes.dateDifference > 10 && (job.attributes.status === 'NOI Eligible' || job.attributes.status === 'NOI Requested' || job.attributes.status === 'Good Standing')) {
          acc.noiEligible.push(job)
        } else if (job.attributes.status === 'NOI Filed') {
          acc.lienEligible.push(job)
        } else if (job.attributes.status === 'Lien Filed') {
          acc.releaseEligible.push(job)
        }
        return acc;
      }, {gracePeriod: [], noiEligible: [], lienEligible: [], releaseEligible: []})
    case 'CLEAR_JOBS':
      return {};
    default:
      return state
  }
}

const findDateDifference = (finishDate) => {
  const endDate = new Date(finishDate);
  const currentDate = new Date();
  const timeDifference = currentDate - endDate;
  const differenceInDays = timeDifference / (1000 * 3600 * 24);

  return Math.round(differenceInDays)
}

export default jobsReducer;
