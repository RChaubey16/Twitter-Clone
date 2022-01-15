import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB40jWARNArojfgtzCIBscvPWsiRyXMm_k",
    authDomain: "twitter-clone-240f9.firebaseapp.com",
    projectId: "twitter-clone-240f9",
    storageBucket: "twitter-clone-240f9.appspot.com",
    messagingSenderId: "339946691171",
    appId: "1:339946691171:web:8510a492caa5003586f656",
    measurementId: "G-F6V0LRDRBZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =  firebaseApp.firestore();

  export default db;