import authSaga from './authSaga';

function* rootSaga() {
    yield [
        authSaga()
    ];
}

export default rootSaga;