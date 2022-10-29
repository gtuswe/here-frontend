import { combineReducers } from 'redux';

import authReducer from './auth';

// Combine all reducers into one root reducer
export default combineReducers({
    authReducer,
});