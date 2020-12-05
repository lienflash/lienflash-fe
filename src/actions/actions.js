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

export const clearJobs = () => {
  return {
    type: 'CLEAR_JOBS'  
  }
}

export const setUser = (userInfo) => {
  return {
    type: 'SET_USER',
    userInfo
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
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

// Admin actions 
export const setAdminJobList = (jobs) => {
  return {
    type: 'ADMIN_JOB_LIST',
    jobs
  }
}
