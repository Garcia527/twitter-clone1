import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKMekVY7rhuBGxX1yX6Uys6x-lqYepi5Q",
    authDomain: "twitter-clone-8eaa2.firebaseapp.com",
    databaseURL: "https://twitter-clone-8eaa2.firebaseio.com",
    projectId: "twitter-clone-8eaa2",
    storageBucket: "twitter-clone-8eaa2.appspot.com",
    messagingSenderId: "211513819222",
    appId: "1:211513819222:web:4c7833c8d9afe61093bbf7",
    measurementId: "G-XNKDSTEJZ8"
  };

  //connect firebase to the backend 
  const firebase = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;