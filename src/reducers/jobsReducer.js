const jobsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ALL_JOBS':
      return action.allJobs;
      // when we add more users, we need to add a user matching conditional
      //return action.allJobs.reduce((acc, job) => {
        // convert date & compare to current date; if valid, do the below
      //   const currentDate = new Date();
      //   const timeDifference = currentDate.getTime() - job.attributes.date_of_completion.getTime();
      //   const differenceInDays = timeDifference / (1000 * 3600 * 24);
      // filter array first to remove expired jobs- do below
      // if materials === 0 and differenceInDays is less than 49
      // if materials is greater than 0 and differenceInDays is less than 109, do below
      // now map result of this array
      //   if (!noiFiled && !lienFiled) {
      //     acc.noiEligible.push(job)
      //   } else if (noiFiled && !lienFiled) {
      //     acc.lienEligible.push(job)
      //   } else if (noiFiled && lienFiled) {
      //     acc.inProcess.push(job)
      //   } else if (releaseEligible) {
      //     acc.releaseEligible.push(job)
      //   }
      // }, {noiEligible: [], lienEligible: [], inProcess: [], releaseEligible: []})
    default:
      return state
  }
}

export default jobsReducer;
