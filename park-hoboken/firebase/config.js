// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebaseConfig = firebase.initializeApp( {
  apiKey: "AIzaSyAYVnHzBJgamHLd3OqWaWrvDCjKciWSkyo",
  authDomain: "park-hoboken.firebaseapp.com",
  databaseURL: "https://park-hoboken-default-rtdb.firebaseio.com",
  projectId: "park-hoboken",
  storageBucket: "park-hoboken.appspot.com",
  messagingSenderId: "19569129787",
  appId: "1:19569129787:web:f8fcf28b0a08bcca45df1e"
});



//export const db = firebase.firestore();
//export const storage = firebase.storage();

require('firebase/auth')
require('firebase/firestore')
export {firebase};

