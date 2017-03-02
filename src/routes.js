'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import LifeTipsPage from './components/LifeTipsPage'
import EventsPage from './components/EventsPage'
import AboutPage from './components/AboutPage'
import ConnectUPage from './components/ConnectU'
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="lifetips" component={LifeTipsPage}/>
    <Route path="events" component={EventsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="ConnectU" component={ConnectUPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
