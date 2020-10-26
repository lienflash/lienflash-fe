import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer.js'

const rootReducer = combineReducers({
  allJobs: jobsReducer,
});

export default rootReducer;
