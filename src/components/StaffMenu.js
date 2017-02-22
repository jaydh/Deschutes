'use strict';

import React from 'react';
import { Link } from 'react-router';
import Staffs from '../data/Staff';

export default class StaffsMenu extends React.Component {
  render() {
    return (
      <nav className="staff-menu">
        {Staffs.map(menuStaff => {
          return <Link key={menuStaff.id} to={`/Staff/${menuStaff.id}`} activeClassName="active">
            {menuStaff.name}
          </Link>;
        })}
      </nav>
    );
  }
}
