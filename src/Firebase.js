import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyA1m67qUbCVGuRyTODlcc3lj15k7MjOlcM",
    authDomain: "deew-beyond.firebaseapp.com",
    databaseURL: "https://deew-beyond.firebaseio.com",
    projectId: "deew-beyond",
    storageBucket: "deew-beyond.appspot.com",
    messagingSenderId: "975471605839",
    appId: "1:975471605839:web:3d0528e23b90183240923a",
    measurementId: "G-RXXFJV02FQ"
};
firebase.initializeApp(config);
var db = firebase.firestore();

export default db;