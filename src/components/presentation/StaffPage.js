"use strict";

import React from "react";
import StaffPreview from "./StaffPreview";
import staff from "../../data/Staff";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router";
import Slider from "react-slick";
import blogs from "../../data/Blogs";

export default class StaffPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const staffMember = staff.filter(staff => staff.id === id)[0];
    if (!staffMember) {
      return <NotFoundPage />;
    }
    const imgSrc = "/img/staff/" + staffMember.image;
    const blogEntries = blogs
      .filter(blog => blog.authorID === staffMember.id)
      .map(blog => {
        return (
          <div>
            {blog.title}
          </div>
        );
      });

    return (
      <div className="flex-container">
        <img src={imgSrc} height="200" width="200" />
        <h3>{staffMember.name}</h3>

        <section className="staff-introduction">
          {staffMember.introduction.map(paragraph => {
            return <p>{paragraph}</p>;
          })}
        </section>

        <Slider
          {...{
            className: "staff-page-blog-carousel",
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            arrows: true
          }}
        >
          <div>{blogEntries}</div>
        </Slider>

        <div className="navigateBack">
          <Link to="/about/">« Back to About Us</Link>
        </div>
      </div>
    );
  }
}
