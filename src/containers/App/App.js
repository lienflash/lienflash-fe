import React from 'react';
import './App.scss';
import Homepage from '../Homepage/Homepage'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/addjob" render={() => {
        return (
          <h2>This will be the job form</h2>
        )
      }}/>
      <Route exact path="/eligiblejobs" render={() => {
        return (
          <h2>These will be all eligible jobs</h2>
        )
      }}/>
      <Route exact path="/filedjobs" render={() => {
        return (
          <h2>These will be all filed jobs</h2>
        )
      }}/>
      <Route exact path="/profile" render={() => {
        return (
          <h2>This will be the user's info</h2>
        )
      }}/>
      <Route exact path="/" render={() => {
        return (
          <Homepage />
        )
      }}/>
    </div>
  );
}

export default App;
