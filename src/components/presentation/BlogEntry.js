"use strict";

import React from "react";
import blogs from "../../data/Blogs";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router";

export default class BlogEntry extends React.Component {
  render() {
    const authorID = this.props.params.authorID;
    const titleID = this.props.params.titleID;
    const blogEntry = blogs.filter(
      blog => blog.authorID === authorID && blog.titleID === titleID
    );

    if (!blogEntry) {
      return <NotFoundPage />;
    }
    return (
      <div className="flex-container">
        <h1>{blogEntry.title}</h1>
        <h2>By {blogEntry.authorID}</h2>
      </div>
    );
  }
}
