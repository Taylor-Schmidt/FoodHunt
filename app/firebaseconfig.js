import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPUuk9TaSgHIEGvibTv9d0FLGVCp9fLK4",
  authDomain: "foodhunt-8e3ac.firebaseapp.com",
  databaseURL: "https://foodhunt-8e3ac-default-rtdb.firebaseio.com",
  projectId: "foodhunt-8e3ac",
  storageBucket: "foodhunt-8e3ac.appspot.com",
  messagingSenderId: "937730736765",
  appId: "1:937730736765:web:6d3e590d54aba73e95a714",
  measurementId: "G-GS62DTSEE6"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
