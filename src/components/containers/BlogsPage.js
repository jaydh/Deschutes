"use strict";

import React from "react";
import blogs from "../../data/Blogs.js";
import { Link } from "react-router";

export default class BlogsPage extends React.Component {
  render() {
    return (
      <div className="flex-container">
        {blogs.map(blogItem => {
          return (
            <div>
              <Link
                className
                to={`/blogs/${blogItem.authorID}/${blogItem.titleID}`}
                activeClassName="active"
              >
                <h2>{blogItem.title}</h2>
                <h3>
                  by {blogItem.author} {blogItem.date.toLocaleDateString()}
                </h3>
              </Link>
            </div>
          );
        })}

      </div>
    );
  }
}
