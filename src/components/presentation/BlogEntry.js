"use strict";

import React from "react";
import blogs from "../../data/Blogs";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router";

export default class BlogEntry extends React.Component {
  render() {
    const authorID = this.props.params.authorID;
    const titleID = this.props.params.titleID;
    const blogEntry = staff.filter(
      blog => (blog.authorID === authorID)[0] && blog.titleID === titleID[0]
    );

    if (!authorID && !titleID) {
      return <NotFoundPage />;
    }
    return (
      <div>
        hi
      </div>
    );
  }
}
