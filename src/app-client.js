'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import { AppContainer } from 'react-hot-loader'

window.onload = () => {
  ReactDOM.render(
  <AppContainer>
    <AppRoutes/>
  </AppContainer>,
 document.getElementById('main'));
};


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/AppRoutes', () => {
    const NextApp = require('./components/AppRoutes').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}