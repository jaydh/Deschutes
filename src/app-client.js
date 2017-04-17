'use strict';
import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import { AppContainer } from 'react-hot-loader'
import * as firebase from "firebase";


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcrkN7SMljNsUBC4NKu2gSR12L_sfPy8c",
  authDomain: "deschutes-e191b.firebaseapp.com",
  databaseURL: "https://deschutes-e191b.firebaseio.com",
  projectId: "deschutes-e191b",
  storageBucket: "deschutes-e191b.appspot.com",
  messagingSenderId: "716471079191"
};
firebase.initializeApp(config);

window.onload = () => {
  ReactDOM.render(
    <AppContainer>
      <AppRoutes />
    </AppContainer>,
    document.getElementById('main'));
};


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/AppRoutes', () => {
    const NextApp = require('./components/AppRoutes').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('main')
    );
  });
}