import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDoUZiEAaBvEw4udwt2p4K9H4HdTfcjFwk",
    authDomain: "netflix-clone-af5d6.firebaseapp.com",
    projectId: "netflix-clone-af5d6",
    storageBucket: "netflix-clone-af5d6.appspot.com",
    messagingSenderId: "470606996631",
    appId: "1:470606996631:web:3dfb50cd9ac8936ed1f5d2"
  };

  /// init
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export { projectAuth, projectFirestore, timestamp }