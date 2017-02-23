'use strict';

import React from 'react';
import staff from '../data/Staff.js'

export default class AboutPage extends React.Component {
  render() {
        return(
            <div className="staff-selector">
                {staff.map(staffData => <staffPreview key={staffData.id} {...staffData} />)}
            </div>
        );
    }
}