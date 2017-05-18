"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/containers/HomePage";
import EventsPage from "./components/containers/EventsPage";
import AboutPage from "./components/containers/AboutPage";
import ConnectUPage from "./components/containers/ConnectUPage";
import NotFoundPage from "./components/presentation/NotFoundPage";
import StaffPage from "./components/presentation/StaffPage";
import BlogsPage from "./components/containers/BlogsPage";
import BlogEntry from "./components/presentation/BlogEntry";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="events" component={EventsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="connectu" component={ConnectUPage} />
    <Route path="about/:id" component={StaffPage} />
    <Route path="blogs/:author/:id" component={BlogEntry} />
    <Route path="blogs" component={BlogsPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
