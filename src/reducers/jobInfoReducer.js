const jobInfoReducer = (state={}, action) => {
  switch(action.type) {
    case 'GET_INFO':
      return action.jobs.find(job => job.id === action.id)
    default:
      return state
  }
}

export default jobInfoReducer;
