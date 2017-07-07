"use strict";

import React from "react";

export default class Footer extends React.Component {
  render() {
    const backgroundImgUrl = "/img/banners/footerBackground.jpg";
    const backgroundImgStyles = {
      backgroundImage: "url(" + backgroundImgUrl + ")",
      backgroundSize: "cover"
    };
    return (
      <div className="Footer">

        <img src={backgroundImgUrl} style={backgroundImgStyles} />

        <div className="FooterLinks">
          <a
            href="https://www.facebook.com/globalreachseattle/"
            target="_blank"
          >
            <img
              src="/img/banners/banner_facebook.png"
              class="img-responsive banner_sns opacity"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/img/banners/banner_instagram.png"
              class="img-responsive banner_sns opacity"
            />
          </a>
          <a href="/about/">ABOUT US</a> / <a href="/about/">CONTACT US</a>
          2016 © Global Reach Seattle, All Rights Reserved.
        </div>
      </div>
    );
  }
}
