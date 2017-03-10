'use strict';

import React from 'react';
import {slide as Menu} from 'react-burger-menu'
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
        }, 
        {
          id: 'connectu',
          name: 'ConnectU'
        }
      ]
    };
  }
  render() {
    return (
      <Menu className="navigation-menu" 
      pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
      isOpen={ true }
      radiumConfig={{ userAgent: 'all' }}
      width={ 150 } >
        {this.state.pages.map(menuItem => {
          return <RadiumLink className="menu-item" to={`/${menuItem.id}`} activeClassName="active">
            {menuItem.name}
          </RadiumLink>;
        })}
       </Menu>
      
    );
  }
}
