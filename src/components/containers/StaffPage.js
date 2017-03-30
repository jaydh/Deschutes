'use strict';

import React from 'react';
import StaffPreview from '../presentation/StaffPreview'
import staff from '../../data/Staff'
import NotFoundPage from './containers/NotFoundPage'

export default class StaffPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const staffMember = staff.filter((staff) => staff.id === id)[0];
        if (!staff) {
            return <NotFoundPage />;
        }
        return (
            <div>
                <img className="staff-image" src={`img/staff/${this.props.image}`} />
                <h3>{this.props.name}</h3>
                <section className='staff-introduction'>{this.props.introduction}</section>
                <div className="navigateBack">
                    <Link to="/about/">« Back to the About</Link>
                </div>
            </div>
        )
    }
}