'use strict';

import React from 'react';
import StaffPreview from '../presentation/StaffPreview'
import staff from '../../data/Staff'
import Slider from 'react-slick'

export default class AboutPage extends React.Component {

    render() {

        const settings = {
            infinite: true,
            dots: true,
            draggable: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true
        }

        const officerPreview = staff.filter((staffMember) => {
            return staffMember.officer;
        }).map(staffData => {
            return <StaffPreview key={staffData.id} {...staffData} />
        })

        const nonofficersPreview = staff.filter((staffMember) => {
            return !staffMember.officer
        }).map(staffData => {
            return (
                <div>
                    <StaffPreview key={staffData.id} {...staffData} />
                </div>
            )
        })
        
        return (
            <div className="flex-container">
                <h1>ABOUT US </h1>
                <h2>Our Mission</h2>
                <p>GRS aims to be the first stepping stone in cultural exchange for international students. Seattle culture can be overwhelming for many visitors and we hope to make the first step that much easier. Our plan is to cultivate expository experiences to help international students engage the city we know and love. By fostering interpersonal adventures we dream that international students may stumble upon a home.</p>
                <h2>Our Team</h2>

                <h3>Officers</h3>
                <div id="officer-container">
                    {officerPreview}
                </div>

                <h3>Members</h3>
                <div id="staff-preview-container">
                    <Slider {...settings}>
                        {nonofficersPreview}
                    </Slider>
                </div>

            </div>
        );
    }
}