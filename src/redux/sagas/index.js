//import functions from './functions';
import login from './login';


const rootSaga = function * rootSaga() {
  yield [
    //analytics(),
    //firestore(),
    //functions(),
    login(),
    //messaging(),
    //storage(),
    // todos(),
  ];
}

export default rootSaga