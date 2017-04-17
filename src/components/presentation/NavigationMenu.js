'use strict';

import React from 'react';
import {bubble as Menu} from 'react-burger-menu'
import { Link } from 'react-router';
import Radium from 'radium'

let RadiumLink = Radium(Link);

export default class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: '',
          name: 'Home'
        },
        {
          id: 'blogs',
          name: 'Blogs'
        },
        {
          id: 'lifetips',
          name: 'Life Tips'
        },
        {
          id: 'events',
          name: 'Events'
        },
        {
          id: 'about',
          name: 'About Us'
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
      pageWrapId={ "page-wrap" } 
      outerContainerId={ "outer-container" }
      radiumConfig={{ userAgent: 'all' }}
      width={ 200 } >
        {this.state.pages.map(menuItem => {
          return <RadiumLink className="menu-item" to={`/${menuItem.id}`} activeClassName="active">
            {menuItem.name}
          </RadiumLink>;
        })}
       </Menu>
      
    );
  }
}
