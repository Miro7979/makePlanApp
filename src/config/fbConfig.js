import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize firebase
var config = {
  apiKey: "AIzaSyCPUNZbSouGjcLLslRcP3VtF-Qri5pwWG0",
  authDomain: "miroplan-ffd7f.firebaseapp.com",
  databaseURL: "https://miroplan-ffd7f.firebaseio.com",
  projectId: "miroplan-ffd7f",
  storageBucket: "miroplan-ffd7f.appspot.com",
  messagingSenderId: "820077539600",
  appId: "1:820077539600:web:553ed0d829de67e303f595",
  measurementId: "G-EL4N4TK1GM"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;