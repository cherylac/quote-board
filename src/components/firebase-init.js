import firebase from 'firebase/app';

var Firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyD8HTSyN2VZzuQJFxaFB9NBCxXeWsGz7fk",
    authDomain: "quote-board-9b038.firebaseapp.com",
    databaseURL: "https://quote-board-9b038.firebaseio.com",
    projectId: "quote-board-9b038",
    storageBucket: "quote-board-9b038.appspot.com",
    messagingSenderId: "129676071799"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.database();

  export default {
      db: db,
      quotesRef: db.ref("quotes"),
      firebaseApp: firebaseApp
    };