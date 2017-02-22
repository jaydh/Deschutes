'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class StaffPreview extends React.Component {
  render() {
    return (
      <Link to={`/staff/${this.props.id}`}>
        <div className="staff-preview">
          <img src={`img/staff/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <p className="introduction">{this.props.introduction}</p>
        </div>
      </Link>
    );
  }
}
