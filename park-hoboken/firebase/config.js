// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYVnHzBJgamHLd3OqWaWrvDCjKciWSkyo",
  authDomain: "park-hoboken.firebaseapp.com",
  databaseURL: "https://park-hoboken-default-rtdb.firebaseio.com",
  projectId: "park-hoboken",
  storageBucket: "park-hoboken.appspot.com",
  messagingSenderId: "19569129787",
  appId: "1:19569129787:web:f8fcf28b0a08bcca45df1e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };