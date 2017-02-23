'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavigationMenu from './NavigationMenu.js'

  const pages = [
  {
      id: 'life tips'
  }, 
  {
      id: 'events'
  }, 
  {
      id: 'community'
  },
  {
      id: 'about us'
  },
  {
      id: 'home'
  }
  ];


export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-grs.png"/>
          </Link>
          <NavigationMenu pages={pages}/>
        </header>
        
        <div className="app-content">{this.props.children}</div>
        
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
