'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class StaffPreview extends React.Component {
  render() {
    return (
      <div className="staff-preview">
        <Link className to={`/about/${this.props.id}`} activeClassName="active">
          <h3>{this.props.name}</h3>
          <img className="staff-image" src={`img/staff/${this.props.image}`} />
        </Link>
      </div>
    );
  }
}
