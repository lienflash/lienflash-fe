const adminJobListReducer = ( state=[], action) => {
  switch(action.type) {
    case 'ADMIN_JOB_LIST':
      return action.jobs.map(job => {
        let attributes = job.attributes
        attributes['id'] = job.id
        return attributes
      })
    default: 
      return state
  }
}

export default adminJobListReducer