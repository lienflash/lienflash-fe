const adminJobListReducer = ( state=[], action) => {
  console.log(action.type)
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