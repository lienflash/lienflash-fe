export const setJobs = (allJobs) => {
  return {
    type: 'ALL_JOBS',
    allJobs
  }
}

export const getJobInfo = (id, dateDifference, eligibility, jobs) => {
  return {
    type: 'GET_INFO',
    id,
    dateDifference,
    eligibility,
    jobs
  }
}

export const setErrorMsg = (errorMessage) => {
  return {
    type: 'SET_ERROR',
    errorMessage
  }
}

export const resetErrorMsg = () => {
  return {
    type: 'RESET_ERROR',
  }
}
