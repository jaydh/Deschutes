'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pages: [
    {
        id: 'life tips',
        name: 'life-tips'
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
      id: 'about us',
      name: 'about-us'
  },
  {
      id: 'home',
      name: 'home'
  }
  ]
  };
  }
  render() {
    return (
      <nav className="navigation-menu">
        {this.state.pages.map(menuItem => {
          return <Link key={menuItem.id} to={`/${menuItem.id}`} activeClassName="active">
            {menuItem.name}
          </Link>;
        })}
      </nav>
    );
  }
}
