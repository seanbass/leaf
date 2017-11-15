//import functions from './functions';
import auth from './auth';


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