import { call, fork, put, take, takeLatest, select, all} from 'redux-saga/effects';
import * as selectors from '../selectors';
import { NavigationActions } from 'react-navigation';

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser,
  registerFailure,
} from '../reducers/login.actions';

import rsf from '../../rsf';

//const authProvider = new firebase.auth.GoogleAuthProvider();

import {DropDownHolder} from '../../refs/DropDownHolder';

const loginSaga = function * () {
  try {
    let email = yield select(selectors.email)
    let password = yield select(selectors.password)
    const data = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(loginSuccess(data));
  }
  catch(error) {
    yield put(loginFailure(error));
    yield call(DropDownHolder.dropDown.alertWithType,'error', 'Error', error.toString())
  }
}

const registerSaga = function * () {
  try {
    let email = yield select(selectors.email)
    let password = yield select(selectors.password)
    const data = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    yield put(loginSuccess(data));
  }
  catch(error){
    yield put(registerFailure(error))
    yield call(DropDownHolder.dropDown.alertWithType,'error', 'Error', error.toString())
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
  yield all([
    takeLatest(types.LOGIN.REQUEST, loginSaga),
    takeLatest(types.LOGIN.SUCCESS, loginSuccessSaga),
    takeLatest(types.LOGOUT.SUCCESS, logoutSuccessSaga),
    takeLatest(types.REGISTER.REQUEST, registerSaga),
    takeLatest(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}

export default loginRootSaga