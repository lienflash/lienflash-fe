import React, { useEffect, useState } from 'react';
import '../../scss/styles.scss'
import Homepage from '../../components/Homepage/Homepage'
import LandingPage from '../../components/LandingPage/LandingPage'
import Login from '../Login/Login';
import Header from '../Header/Header'
import Loader from '../../components/Loader/Loader'
import Jobs from '../Jobs/Jobs'
import { Route, Redirect, useLocation } from 'react-router-dom'
import JobForm from '../../components/JobForm/JobForm';
import JobDetails from '../JobDetails/JobDetails';
import Error from '../../components/Error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../../helpers/apiCalls'
import { setJobs, getJobInfo, setErrorMsg, resetErrorMsg } from '../../actions/actions'
import PropTypes from 'prop-types';

function App() {
  const [jobAdded, updateJobAddedStatus] = useState(false)
  const [isLoaded, updateLoadingStatus] = useState(true)
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.allJobs);
  const errorMsg = useSelector(state => state.errorMessage);
  const user = useSelector(state => state.user.attributes)
  const location = useLocation();

  return (
    <div className="App">
      { !isLoaded &&
        <Loader />
      }
      {!isLoaded && errorMsg &&
        <>
          <Loader />
          <Error />
        </>
      }
      { isLoaded && user !== undefined &&
          <>
            <Route exact path='/jobs/:eligibility/:dateDifference/:id' render={({match}) => {
              const jobId = match.params.id;
              const dateDifference = match.params.dateDifference
              const eligibility = match.params.eligibility;
              dispatch(getJobInfo(jobId, dateDifference, eligibility, allJobs));
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
            <Route exact path={"/filedjobs/lien-eligible"} render={() => {
              return (
                <>
                  <Header currentPath="filed"/>
                  <h2>Lien Eligible</h2>
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
            <Route exact path="/homepage" render={() => {
              return (
                <>
                  <Header />
                  <Homepage updateJobAddedStatus={updateJobAddedStatus} updateLoadingStatus={updateLoadingStatus} jobAdded={jobAdded}/>
                </>
              )
            }}/>
            <Route render={() =>
              <Redirect to="/homepage" />} />
          </>
        }
        {isLoaded && user === undefined &&
          <>
            <Route exact path="/login" render={() => {
              return (
                <>
                  <Header />
                  <Login />
                </>
              )
            }}/>
            <Route render={() =>
              <Redirect to="/" />} />
            <Route exact path='/' render={() => {
              return(
                <LandingPage />
              )
            }} />
          </>
        }
        {errorMsg &&
          <Error />
        }
    </div>
  );
}

export default App;

App.propTypes = {
  allJobs: PropTypes.object,
  errorMsg: PropTypes.string
};
