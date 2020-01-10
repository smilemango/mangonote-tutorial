import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
      apiKey: "AIzaSyBwt8DSfFFh5oTr4BhWeTQBJgVLa10rFQE",
      authDomain: "mangonote-8356e.firebaseapp.com",
      databaseURL: "https://mangonote-8356e.firebaseio.com",
      projectId: "mangonote-8356e",
      storageBucket: "mangonote-8356e.appspot.com",
      messagingSenderId: "121439145886",
      appId: "1:121439145886:web:19f16187551ad17e75d08f",
      measurementId: "G-KNRCDJQR0M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
