'use strict';

import React from 'react';
import StaffPreview from './StaffPreview'
import staff from '../../data/Staff'
import NotFoundPage from './NotFoundPage'
import { Link } from 'react-router'

export default class StaffPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const staffMember = staff.filter((staff) => staff.id === id)[0];
        if (!staffMember) {
            return <NotFoundPage />;
        }
        const imgSrc = '/img/staff/' + staffMember.image;
        return (
            <div className="flex-container">
                <img src={imgSrc} height="200" width="200" />
                <h3>{staffMember.name}</h3>

                <section className='staff-introduction'>{
                    staffMember.introduction.map(paragraph => {
                        return <p>{paragraph}</p>
                    })
                }</section>

                //filter blogs by author
                

                <div className="navigateBack">
                    <Link to="/about/">« Back to About Us</Link>
                </div>
            </div>
        )
    }
}
