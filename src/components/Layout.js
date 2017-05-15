'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavigationMenu from './presentation/NavigationMenu.js'
import Header from './presentation/Header.js'
import Footer from './presentation/Footer.js'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div id="outer-container">

          <NavigationMenu />
          <main id="page-wrap">

            <Header />
            <div className="app-content">{this.props.children}</div>
            <Footer />

          </main>
        </div>
      </div>
    )
  }
}
