'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavigationMenu from './presentation/NavigationMenu.js'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div id="outer-container">

        <header>
          
        </header>

          <NavigationMenu />

          <main id="page-wrap">
            <div className="app-content">{this.props.children}</div>

            <footer>
              <p>
                <a href="https://www.facebook.com/internationalreachseattle/" target="_blank"><img src="/img/banners/banner_facebook.png" class="img-responsive banner_sns opacity" /></a>
                <a href="" target="_blank"><img src="/img/banners/banner_instagram.png" class="img-responsive banner_sns opacity" /></a>
                <a href="/globalreach/about/">ABOUT US</a> / <a href="/globalreach/about/">CONTACT US</a>
                2016 &copy; Global Reach Seattle, All Rights Reserved.
             </p>
            </footer>
          </main>
        </div>
      </div>
    )
  }
}
