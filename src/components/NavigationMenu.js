'use strict';

import React from 'react';
import {stack as Menu} from 'react-burger-menu'
import { Link } from 'react-router';
import Radium from 'radium'

let RadiumLink = Radium(Link);

export default class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: 'lifetips',
          name: 'life tips'
        },
        {
          id: 'events',
          name: 'events'
        },
        {
          id: 'community',
          name: 'community'
        },
        {
          id: 'about',
          name: 'about us'
        }
      ]
    };
  }
  showSettings (event) {
    //event.preventDefault();
  }
  render() {
    return (
      <Menu className="navigation-menu" 
      isOpen={ true }
      radiumConfig={{ userAgent: 'all' }} >
        {this.state.pages.map(menuItem => {
          return <RadiumLink className="menu-item" to={`/${menuItem.id}`} activeClassName="active">
            {menuItem.name}
          </RadiumLink>;
        })}
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      
    );
  }
}
