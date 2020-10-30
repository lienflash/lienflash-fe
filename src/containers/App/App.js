import React, { useEffect, useState } from 'react';
import '../../scss/styles.scss'
import Homepage from '../../components/Homepage/Homepage'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import Jobs from '../Jobs/Jobs'
import { Route, useLocation } from 'react-router-dom'
import JobForm from '../JobForm/JobForm';
import JobDetails from '../../components/JobDetails/JobDetails';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../../helpers/apiCalls'
import { setJobs, getJobInfo } from '../../actions/actions'


function App() {
  const [jobAdded, updateJobAddedStatus] = useState(false)
  const [isLoaded, updateLoadingStatus] = useState(true)
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.allJobs);
  const location = useLocation();

  useEffect(() => {
      getAllJobs()
        .then(data => {
          dispatch(setJobs(data.data))
          updateJobAddedStatus(false)
          updateLoadingStatus(false)
        })
        .catch(error => {
          alert('Sorry, we had an issue retrieving your jobs. Please refresh to try again.')
        })
  }, [ jobAdded ])

  return (
    <div className="App">
      { !isLoaded &&
        <Loader />
      }
      { isLoaded &&
        <>
          <Route exact path='/jobs/:eligibility/:id' render={({match}) => {
            const jobId = match.params.id;
            const eligibility = match.params.eligibility;
            dispatch(getJobInfo(jobId, eligibility, allJobs));
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
                <JobForm updateJobAddedStatus={updateJobAddedStatus} />
              </>
            )
          }}/>
          <Route exact path="/eligiblejobs/grace-period" render={() => {
            return (
              <>
                <Header currentPath={'eligible'}/>
                <h2>Jobs in Grace Period</h2>
                <Jobs />
              </>
            )
          }}/>
          <Route exact path="/eligiblejobs/noi-eligible" render={() => {
            return (
              <>
                <Header currentPath={'eligible'}/>
                <h2>NOI Eligible Jobs</h2>
                <Jobs />
              </>
            )
          }}/>
          <Route exact path="/eligiblejobs/lien-eligible" render={() => {
            return (
              <>
                <Header currentPath={'eligible'}/>
                <h2>Lien Eligible Jobs</h2>
                <Jobs />
              </>
            )
          }}/>
          <Route exact path={"/filedjobs/processing"} render={() => {
            return (
              <>
                <Header currentPath="filed"/>
                <h2>Processing Lien</h2>
                <Jobs />
              </>
            )
          }}/>
          <Route exact path={"/filedjobs/release-eligible"} render={() => {
            return (
              <>
                <Header currentPath="filed"/>
                <h2>Jobs Eligible for Lien Release</h2>
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
        </>
      }
    </div>
  );
}

export default App;
