import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize firebase
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAutH9xnn8ioaEJqDhSDIFLofxsUBcE1zI",
    authDomain: "makeplanapp.firebaseapp.com",
    databaseURL: "https://makeplanapp.firebaseio.com",
    projectId: "makeplanapp",
    storageBucket: "makeplanapp.appspot.com",
    messagingSenderId: "306063809153",
    appId: "1:306063809153:web:f05d6c020c9425140d4b80",
    measurementId: "G-ZTE9PXR4W1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore();
//.settings({timestampsInSnapshots: true})

export default firebase;