"use strict";

import React from "react";
import blogs from "../../data/Blogs";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router";

export default class BlogEntry extends React.Component {
  render() {
    const authorID = this.props.params.authorID;
    const titleID = this.props.params.titleID;
    console.log(authorID, titleID, "d");
    const blogEntry = blogs.filter(
      (blog) => (blog.authorID === authorID && blog.titleID === titleID)
    )[0];

    if (!blogEntry) {
      return <NotFoundPage />;
    }
    return (
      <div className="flex-container">
        <h2>{blogEntry.title}</h2>
        <h3>By {blogEntry.authorID}</h3>
        <div className="blog-body">
          {blogEntry.paragraphs.map(paragraph => {
            return <p>{paragraph}</p>
          })}
        </div>
      </div>
    );
  }
}
