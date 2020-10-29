import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer.js';
import jobInfoReducer from './jobInfoReducer.js'

const rootReducer = combineReducers({
  allJobs: jobsReducer,
  jobInfo: jobInfoReducer
});

export default rootReducer;
