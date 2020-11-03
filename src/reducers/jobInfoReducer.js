const jobInfoReducer = (state={}, action) => {
  switch(action.type) {
    case 'GET_INFO':
      switch(action.eligibility) {
        case 'good standing':
          if(action.dateDifference > 10) {
            return action.jobs.noiEligible.find(job => job.id === action.id);
          } else {
            return action.jobs.gracePeriod.find(job => job.id === action.id);
          }
        case 'NOI Eligible':
          return action.jobs.noiEligible.find(job => job.id === action.id);
        case 'NOI Requested':
          return action.jobs.noiEligible.find(job => job.id === action.id);
        case 'NOI filed':
          return action.jobs.lienEligible.find(job => job.id === action.id);
        case 'Lien Filed':
          return action.jobs.releaseEligible.find(job => job.id === action.id);
      }
      break;
    default:
      return state
  }
}

export default jobInfoReducer;
