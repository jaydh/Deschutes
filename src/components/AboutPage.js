'use strict';

import React from 'react';
import StaffPreview from './StaffPreview'
import staff from '../data/Staff'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-full">
                <div class="container-fluid">
                    <div class="row">
                        <div class="text-center center-block col-sm-8 col-sm-offset-2 col-xs-12">
                            <h1>ABOUT US </h1>
                            <h2>Mission Statement</h2>
                            <p>sdafasdf</p>
                        </div>
                    </div>
                </div>
                <div className="staff-grid">
                    {staff.map(staffData => <StaffPreview key={staffData.id} {...staffData} />)}

                </div>
            </div>
        );
    }
}