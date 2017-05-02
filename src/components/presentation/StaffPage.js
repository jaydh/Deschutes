'use strict';

import React from 'react';
import StaffPreview from './StaffPreview'
import staff from '../../data/Staff'
import NotFoundPage from './NotFoundPage'
import {Link} from 'react-router'

export default class StaffPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const staffMember = staff.filter((staff) => staff.id === id)[0];
        if (!staffMember) {
            return <NotFoundPage />;
        }
        const imgSrc = '/img/staff/'+ staffMember.image;
        return (
            <div>
                <img className="staff-image" src={imgSrc} />
                <h3>{staffMember.name}</h3>
                <section className='staff-introduction'>{staffMember.introduction}</section>
                <div className="navigateBack">
                    <Link to="/about/">« Back to About Us</Link>
                </div>
            </div>
        )
    }
}