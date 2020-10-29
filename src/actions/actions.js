export const setJobs = (allJobs) => {
  return {
    type: 'ALL_JOBS',
    allJobs
  }
}

export const getJobInfo = (id, eligibility, jobs) => {
  return {
    type: 'GET_INFO',
    id,
    eligibility,
    jobs
  }
}
