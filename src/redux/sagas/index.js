//import functions from './functions';
import auth from './auth';
import {all} from 'redux-saga/effects';


const rootSaga = function * rootSaga() {
  yield [
    //analytics(),
    //firestore(),
    //functions(),
    auth(),
    //messaging(),
    //storage(),
    // todos(),
  ];
}

export default rootSaga