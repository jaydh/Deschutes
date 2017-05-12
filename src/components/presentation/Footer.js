'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <div className='FooterLinks'>
        <a href="https://www.facebook.com/globalreachseattle/" target="_blank"><img src="/img/banners/banner_facebook.png" class="img-responsive banner_sns opacity" /></a>
        <a href="" target="_blank"><img src="/img/banners/banner_instagram.png" class="img-responsive banner_sns opacity" /></a>
        <a href="/about/">ABOUT US</a> / <a href="/about/">CONTACT US</a>
        2016 &copy; Global Reach Seattle, All Rights Reserved.
        </div>
      </div>
    );
  }
}
