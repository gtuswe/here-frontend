import { applyMiddleware, compose} from 'redux';

import { configureStore,  } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import authReducer from './reducers/auth';

import tokenReducer from './reducers/auth/token';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 

const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development' ? compose(applyMiddleware(sagaMiddleware), reduxDevTools) : applyMiddleware(sagaMiddleware);


export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        tokenReducer: tokenReducer,
    },
    middleware:  [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});




