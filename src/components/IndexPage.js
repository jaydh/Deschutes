'use strict';

import React from 'react';
import StaffPreview from './StaffPreview';
import staff from '../data/Staff';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="pane-selector">
        </div>
        <div className="staff-selector">
          {staff.map(staffData => <StaffPreview key={staffData.id} {...staffData} />)}
        </div>
      </div>
    );
  }
}
