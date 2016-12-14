import React from 'react';
import {ReactDOM, render} from 'react-dom';
import './index.css';
import firebase from 'firebase'
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './Reducers'
import App from './Components/App'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcrkN7SMljNsUBC4NKu2gSR12L_sfPy8c",
  authDomain: "deschutes-e191b.firebaseapp.com",
  databaseURL: "https://deschutes-e191b.firebaseio.com",
  storageBucket: "deschutes-e191b.appspot.com",
  messagingSenderId: "716471079191"
};
firebase.initializeApp(config);


let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)