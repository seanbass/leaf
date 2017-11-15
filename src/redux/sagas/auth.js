import { call, fork, put, take, takeLatest, select} from 'redux-saga/effects';
import * as selectors from '../selectors';
import { NavigationActions } from 'react-navigation';

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser,
} from '../reducers/login.actions';

import rsf from '../../rsf';

//const authProvider = new firebase.auth.GoogleAuthProvider();

const loginSaga = function * () {
  try {
    let email = yield select(selectors.email)
    let password = yield select(selectors.password)
    const data = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(loginSuccess(data));
  }
  catch(error) {
    yield put(loginFailure(error));
  }
}

const logoutSaga = function * () {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(logoutSuccess(data));
  }
  catch(error) {
    yield put(logoutFailure(error));
  }
}

const syncUserSaga = function * () {
  const channel = yield call(rsf.auth.channel);

  while(true) {
    const { error, user } = yield take(channel);

    if (user) yield put(syncUser(user));
    else yield put(syncUser(null));
  }
}

const loginSuccessSaga = function * () {
  yield put(NavigationActions.navigate({ routeName: 'Main' }));
}

const logoutSuccessSaga = function * () {
  yield put(NavigationActions.navigate({ routeName: 'Login' }));
}

const loginRootSaga = function * (){
  yield fork(syncUserSaga);
  yield [
    takeLatest(types.LOGIN.SUCCESS, loginSuccessSaga),
    takeLatest('@@redux-form/SET_SUBMIT_SUCCEEDED', loginSaga),
    takeLatest(types.LOGOUT.SUCCESS, logoutSuccessSaga),
    //takeLatest(types.LOGIN.REQUEST, loginSaga),
    takeLatest(types.LOGOUT.REQUEST, logoutSaga),
  ];
}

export default loginRootSaga