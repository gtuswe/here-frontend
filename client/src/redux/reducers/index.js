import { combineReducers } from 'redux';

import authReducer from './auth';
import tokenReducer from './auth/token';

// Combine all reducers into one root reducer
export default combineReducers({
    authReducer,
    tokenReducer,
});