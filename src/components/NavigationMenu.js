'use strict';

import React from 'react';
import { Link } from 'react-router';


export default class NavigationMenu extends React.Component {

  render() {
    return (
      <nav className="navigation-menu">
        {this.props.pages.map(menuStaff => {
          return <Link key={pages.id} to={`/${pages.id}`} activeClassName="active">
            {pages.name}
          </Link>;
        })}
      </nav>
    );
  }
}
