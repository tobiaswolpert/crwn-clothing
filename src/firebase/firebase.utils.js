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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(err) {
        console.log('error creating user', err.message);
      }
    }
    return userRef
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection; 
    return accumulator;
  } , {});
};


// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);

//   const batch = firestore.batch();

//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj); 
//   })

//   return await batch.commit();
// }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
