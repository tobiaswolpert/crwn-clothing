import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAC4G3K3YGc90p3FC1iQbn-ocLIoTsUGo",
    authDomain: "crwn-db-f2200.firebaseapp.com",
    projectId: "crwn-db-f2200",
    storageBucket: "crwn-db-f2200.appspot.com",
    messagingSenderId: "558775930781",
    appId: "1:558775930781:web:46c44c0ab34e8b580c6974",
    measurementId: "G-43063W5MP3"
  };


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
