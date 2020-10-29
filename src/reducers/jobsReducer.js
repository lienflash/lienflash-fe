const jobsReducer = (state={}, action) => {
  switch(action.type) {
    case 'ALL_JOBS':
      //when we add more users, we need to add a user matching conditional
      // also need to add conditionals for early submission of NOI to change timeline for Lien Submission - may need to add dateOfSubmission and filter that way?
      return action.allJobs.reduce((acc, job) => {
        const findDateDifference = (finishDate) => {
          const endDate = new Date(finishDate);
          const currentDate = new Date();
          const timeDifference = currentDate - endDate;
          const differenceInDays = timeDifference / (1000 * 3600 * 24);

          return Math.round(differenceInDays)
        }
        job.attributes.dateDifference = findDateDifference(job.attributes.completion_date)

      if (job.attributes.dateDifference < 11 && job.attributes.status === 'good standing') {
        acc.gracePeriod.push(job)
      }

      if(job.attributes.job_type === 'Labor'){
        if (job.attributes.dateDifference > 10 && job.attributes.dateDifference < 51 && job.attributes.status === 'NOI Eligible') {
          acc.noiEligible.push(job)
        } else if (job.attributes.dateDifference > 60 && job.attributes.dateDifference < 70 && job.attributes.status === 'NOI filed') {
          acc.lienEligible.push(job)
        } else if (job.attributes.dateDifference > 70 && (job.attributes.status !== 'Release Eligible' || job.attributes.status !== 'Inactive')) {
          acc.inProcess.push(job)
        }else if (job.attributes.dateDifference > 70 && job.attributes.status === 'Lien Filed') {
          acc.releaseEligible.push(job)
        }
      } else if (job.attributes.job_type === 'Materials & Labor')
        if (job.attributes.dateDifference > 10 && job.attributes.dateDifference < 119 && job.attributes.status === 'NOI Eligible') {
          acc.noiEligible.push(job)
        } else if (job.attributes.dateDifference > 120 && job.attributes.dateDifference < 130 && job.attributes.status === 'NOI filed') {
          acc.lienEligible.push(job)
        } else if (job.attributes.dateDifference > 130 && (job.attributes.status !== 'Release Eligible' || job.attributes.status !== 'Inactive')){
          acc.inProcess.push(job)
        }else if (job.attributes.dateDifference > 130 && job.attributes.status === 'Lien Filed') {
          acc.releaseEligible.push(job)
        }
        return acc;
      }, {gracePeriod: [], noiEligible: [], lienEligible: [], inProcess: [], releaseEligible: []})
    default:
      return state
  }
}

export default jobsReducer;
