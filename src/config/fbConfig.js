import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCeuSIDyelD5jAnzUDyv54zXngR90o0jUk",
  authDomain: "transactions-16cc1.firebaseapp.com",
  databaseURL: "https://transactions-16cc1.firebaseio.com",
  projectId: "transactions-16cc1",
  storageBucket: "transactions-16cc1.appspot.com",
  messagingSenderId: "1051516049211",
  appId: "1:1051516049211:web:c27e38ad1e717535fdc91e",
  measurementId: "G-4HRG0S1X86"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;