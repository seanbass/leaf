import * as firebase from 'firebase';
import keys from './keys'

// Initialize Firebase
const firebaseConfig = {
  apiKey: keys.firebase.apiKey,
  authDomain: keys.firebase.authDomain,
  databaseURL: keys.firebase.databaseURL,
  projectId: keys.firebase.projectId,
  storageBucket: keys.firebase.storageBucket,
  messagingSenderId: keys.firebase.messagingSenderId
};

var database = firebase.initializeApp(firebaseConfig);

database.auth().onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // User is signed in.
    console.log( "name: ", displayName);
    console.log( "uid: ", uid);
    // ...
  } else {
    console.log( uid, " logged out.");
    // User is signed out.
    // ...
  }
});

export default database