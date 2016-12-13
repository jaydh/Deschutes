import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcrkN7SMljNsUBC4NKu2gSR12L_sfPy8c",
  authDomain: "deschutes-e191b.firebaseapp.com",
  databaseURL: "https://deschutes-e191b.firebaseio.com",
  storageBucket: "deschutes-e191b.appspot.com",
  messagingSenderId: "716471079191"
};
firebase.initializeApp(config);


const task = [
  'finish app',
  'eventually',
  'programming',
  false
]

ReactDOM.render(
  <App />,
  <Tasks pair={task}/>,
  document.getElementById('root')
  
);
