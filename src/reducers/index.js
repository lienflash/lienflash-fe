import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer.js';
import jobInfoReducer from './jobInfoReducer.js';
import errorReducer from './errorReducer.js';
import userReducer from './userReducer.js';

const rootReducer = combineReducers({
  allJobs: jobsReducer,
  jobInfo: jobInfoReducer,
  user: userReducer,
  errorMessage: errorReducer
});

export default rootReducer;
