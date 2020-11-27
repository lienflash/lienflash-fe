import React, { useState, useEffect } from 'react';
import '../../scss/styles.scss'
import Homepage from '../Homepage/Homepage'
import LandingPage from '../../components/LandingPage/LandingPage'
import Login from '../Login/Login';
import CreateUser from '../CreateUser/CreateUser';
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Jobs from '../Jobs/Jobs'
import { Route, Redirect, useParams } from 'react-router-dom'
import JobForm from '../JobForm/JobForm';
import JobDetails from '../JobDetails/JobDetails';
import AdminHomepage from '../AdminHomepage/AdminHomepage';
import Error from '../../components/Error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../helpers/apiCalls'
import {  getJobInfo, setUser } from '../../actions/actions'
import PropTypes from 'prop-types';

function App() {
  const [statusUpdated, updateStatus] = useState(false)
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.allJobs);
  const errorMsg = useSelector(state => state.errorMessage);
  const user = useSelector(state => state.user.attributes)
  const token = localStorage.token

  useEffect(() => {
    if (token && user === undefined) {
      getUserProfile(token)
        .then(data => {
          dispatch(setUser(data.data))
      })
      .catch(error => alert('Error retrieving users profile'))
    }
  })

  return (
    <div className="App">
      {(user !== undefined && user.role === 'admin') &&
        <Route exact path="/admin-homepage" render={() => {
          return (
            <>
              <Header currentPath='user' />
              <AdminHomepage />
            </>
          )
        }} />
      }
      { (user !== undefined && user.role === 'default') &&
          <>
            <Route exact path='/jobs/:eligibility/:dateDifference/:id' render={({match}) => {
              const jobId = match.params.id;
              const dateDifference = match.params.dateDifference
              const eligibility = match.params.eligibility;
              dispatch(getJobInfo(jobId, dateDifference, eligibility, allJobs));
              return (
                <>
                  <Header />
                  <JobDetails updateStatus={updateStatus}/>
                </>
              )
            }}/>
            <Route exact path="/addjob" render={() => {
              return (
                <>
                  <Header />
                  <JobForm updateStatus={updateStatus} />
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
                  <Header currentPath='user'/>
                  <Profile />
                </>
              )
            }}/>
            <Route exact path="/homepage" render={() => {
              return (
                <>
                  <Header currentPath='user'/>
                  <Homepage 
                    updateStatus={updateStatus} 
                    statusUpdated={statusUpdated}
                  />
                </>
              )
            }}/>
            <Route render={() =>
              <Redirect to="/homepage" />} />
          </>
        }
        { (!token && user === undefined) &&
          <>
            <Route exact path="/login" render={() => {
              return (
                <>
                  <Header currentPath='no-user'/>
                  <Login />
                </>
              )
            }}/>
            <Route exact path="/create-user" render={({match}) => {
              return (
                <>
                  <Header currentPath='no-user'/>
                  <CreateUser />
                </>
              )
            }} />
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
  user: PropTypes.object,
  errorMsg: PropTypes.string
};
