import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import keys from '../keys';

const firebaseApp = firebase.initializeApp({
  apiKey: keys.firebase.apiKey,
  authDomain: keys.firebase.authDomain,
  databaseURL: keys.firebase.databaseURL,
  projectId: keys.firebase.projectId,
  storageBucket: keys.firebase.storageBucket,
  messagingSenderId: keys.firebase.messagingSenderId
});

const rsf = new ReduxSagaFirebase(
  firebaseApp,
  firebase.firestore()
);

export default rsf