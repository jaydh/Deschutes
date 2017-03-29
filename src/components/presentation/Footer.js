'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <p>
            <a href="https://www.facebook.com/internationalreachseattle/" target="_blank"><img src="/img/banners/banner_facebook.png" class="img-responsive banner_sns opacity" /></a>
            <a href="" target="_blank"><img src="/img/banners/banner_instagram.png" class="img-responsive banner_sns opacity" /></a>
            <a href="/globalreach/about/">ABOUT US</a> / <a href="/globalreach/about/">CONTACT US</a>
            2016 &copy; Global Reach Seattle, All Rights Reserved.
             </p>
        </footer>
      </div>
    );
  }
}
