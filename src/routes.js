'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/containers/IndexPage'
import LifeTipsPage from './components/containers/LifeTipsPage'
import EventsPage from './components/containers/EventsPage'
import AboutPage from './components/containers/AboutPage'
import ConnectUPage from './components/containers/ConnectUPage'
import NotFoundPage from './components/containers/NotFoundPage'
import StaffPage from './components/containers/StaffPage'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="lifetips" component={LifeTipsPage}/>
    <Route path="events" component={EventsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="connectu" component={ConnectUPage}/>
    <Route path="about/:id" component={StaffPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
