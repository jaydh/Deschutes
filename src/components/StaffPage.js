'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import StaffMenu from './StaffMenu';
import staff from '../data/Staff';

export default class StaffPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const staff = staffs.filter((staff) => staff.id === id)[0];
    if (!staff) {
      return <NotFoundPage/>;
    }
    return (
      <div className="staff-full">
        <StaffMenu/>
        <div className="staff">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${staff.image}`}/>
            <h2 className="name">{staff.name}</h2>
          </div>
          <section className="description">
            <p>{staff.introduction}</p>
          </section>
          </div>
        <div className="navigateBack">
          <Link to="/">« Back to the About</Link>
        </div>
      </div>
    );
  }
}
