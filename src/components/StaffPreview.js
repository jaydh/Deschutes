'use strict';

import React from 'react';

export default class StaffPreview extends React.Component {
  render() {
    return (
      <div className="staff-preview">
        <img className="staff-image" src={`img/staff/${this.props.image}`} />
        <h2 className="name">{this.props.name}</h2>
        <p className="introduction">{this.props.introduction}</p>
      </div>
    );
  }
}
