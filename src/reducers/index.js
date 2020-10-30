import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer.js';
import jobInfoReducer from './jobInfoReducer.js';
import errorReducer from './errorReducer.js';

const rootReducer = combineReducers({
  allJobs: jobsReducer,
  jobInfo: jobInfoReducer,
  errorMessage: errorReducer
});

export default rootReducer;
