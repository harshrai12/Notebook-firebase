import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxey2Ht6y-cIZ3mJPlg_4JKVSO7Hldng0",
    authDomain: "evernote-clone-f6360.firebaseapp.com",
    projectId: "evernote-clone-f6360",
    storageBucket: "evernote-clone-f6360.appspot.com",
    messagingSenderId: "203538953574",
    appId: "1:203538953574:web:59db59e8422e74c149c4a7"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth= firebase.auth();

export {auth,db}


export default firebase;
