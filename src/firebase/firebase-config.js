import firebase from "firebase";
import 'firebase/firestore';

    // Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC11lFZFxbQSiloY6WkM3R8QaDbJQL6FbI",
  authDomain: "login-react-344da.firebaseapp.com",
  projectId: "login-react-344da",
  storageBucket: "login-react-344da.appspot.com",
  messagingSenderId: "556813056547",
  appId: "1:556813056547:web:c20a76637f2b2b014a8f96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    db, 
    googleAuthProvider,
    firebase
};