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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();
    if(!snapShot.exists) {
      const {displayName, email} =userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,email,createdAt,...additonalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
  
  return userRef;
  };
  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
