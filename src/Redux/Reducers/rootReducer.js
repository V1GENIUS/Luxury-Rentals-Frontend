// rootReducer.js
import { combineReducers } from 'redux';
import adminReducer from './adminSlice';
import villaReducer from './villaSlice';

export default combineReducers({
  admin: adminReducer,
  villas: villaReducer,
});
