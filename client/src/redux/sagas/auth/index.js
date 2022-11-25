import {put, call, takeLatest} from 'redux-saga/effects';

import axios from '../../../lib/axios';

import * as actionTypes from '../../actions';



/* Make requests for login */
export default function* loginDataWatcher() {
    yield takeLatest(actionTypes.LOGIN, loginWrapper);
}

function* loginWrapper(action) {
    try {
        yield put({type: actionTypes.LOGIN_IN_PROGRESS});
        
        const loginResult = yield call(loginDataWrapper, action.payload);

        yield put({type: actionTypes.LOGIN_SUCCESS, payload: loginResult});
    } catch (err) {
        yield put({type: actionTypes.LOGIN_FAILURE, payload: err && err.desc});
    }
}

function* loginDataWrapper(payload) {
    let endPoint = '/api/login';
    const promise = yield new Promise((resolve, reject) => {
        axios
            .post(endPoint, payload)
            .then((res) => {
                resolve(res.data.loginData);
            })
            .catch((err) => {
                reject(err.response && err.response.data);
            });
    });

    return promise;
}
