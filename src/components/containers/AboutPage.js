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
                            <h1>ABOUT US </h1>
                            <h2>Mission Statement</h2>
                            <p>GRS aims to be the first stepping stone in cultural exchange for international students. Seattle culture can be overwhelming for many visitors and we hope to make the first step that much easier. Our plan is to cultivate expository experiences to help international students engage the city we know and love. By fostering interpersonal adventures we dream that international students may stumble upon a home.</p>
                    </div>
                </div>
                <div className="staff-grid">
                    {staff.map(staffData => <StaffPreview key={staffData.id} {...staffData} />)}

                </div>
            </div>
        );
    }
}