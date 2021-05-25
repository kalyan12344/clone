import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-bsXAkMjo9H_-RlTcW8vjjW1kXWkLJPw",
    authDomain: "ecom1db.firebaseapp.com",
    projectId: "ecom1db",
    storageBucket: "ecom1db.appspot.com",
    messagingSenderId: "87018422913",
    appId: "1:87018422913:web:25c076fb1e65110c570380",
    measurementId: "G-1CPHVEYB7W"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
