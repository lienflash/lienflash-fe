import React, { useEffect } from 'react';
import '../../scss/styles.scss'
import Homepage from '../../components/Homepage/Homepage'
import Header from '../../components/Header/Header'

import Jobs from '../Jobs/Jobs'
import { Route } from 'react-router-dom'
import JobForm from '../JobForm/JobForm';
import JobDetails from '../../components/JobDetails/JobDetails';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../../helpers/apiCalls'
import { setJobs, getJobInfo } from '../../actions/actions'


function App() {
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.allJobs);

  useEffect(() => {
      getAllJobs()
        .then(data => {
          dispatch(setJobs(data.data))
        })
        .catch(error => {
          alert('Sorry, we had an issue retrieving your jobs. Please refresh to try again.')
        })
  }, [])

  return (
    <div className="App">
      <Route exact path='/jobs/:id' render={({match}) => {
        const jobId = match.params.id;
        dispatch(getJobInfo(jobId, allJobs));
        return (
          <>
            <Header />
            <JobDetails />
          </>
        )
      }}/>
      <Route exact path="/addjob" render={() => {
        return (
          <>
            <Header />
            <JobForm />
          </>
        )
      }}/>
      <Route exact path="/eligiblejobs" render={() => {
        return (
          <>
            <Header currentPath={'eligible'}/>
            <h2>Eligible</h2>
            <Jobs />
          </>
        )
      }}/>
      <Route exact path={"/filedjobs"} render={() => {
        return (
          <>
            <Header currentPath="filed"/>
            <h2>Filed</h2>
            <Jobs />
          </>
        )
      }}/>
      <Route exact path="/profile" render={() => {
        return (
          <>
            <Header />
            <h2>This will be the user's info</h2>
          </>
        )
      }}/>
      <Route exact path="/" render={() => {
        return (
          <>
            <Header />
            <Homepage />
          </>
        )
      }}/>

    </div>
  );
}

export default App;
