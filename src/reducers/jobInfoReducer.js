const jobInfoReducer = (state={}, action) => {
  switch(action.type) {
    case 'GET_INFO':
      switch(action.eligibility) {
        case 'good standing':
          return action.jobs.gracePeriod.find(job => job.id === action.id);
        case 'NOI Eligible':
          return action.jobs.noiEligible.find(job => job.id === action.id);
        case 'NOI filed':
          return action.jobs.lienEligible.find(job => job.id === action.id);
        case 'Lien Filed':
          return action.jobs.releaseEligible.find(job => job.id === action.id);
        default:
          return 'We can\'t find this job. Please try again'
      }
      // need to iterate over each array to find matching job details
      // need to add something to find in process
    default:
      return state
  }
}

export default jobInfoReducer;
