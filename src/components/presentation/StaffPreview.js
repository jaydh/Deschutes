'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class StaffPreview extends React.Component {
  render() {
    return (
      <div className="staff-preview">
        <Link className to={`/about/${this.props.id}`} activeClassName="active">
          <img className="staff-image" src={`/img/staff/${this.props.image}`} />
          <h3>{this.props.name}</h3>
        </Link>
      </div>
    );
  }
}
