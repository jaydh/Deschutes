'use strict';

import React from 'react';
import blogs from '../../data/Blogs'
import NotFoundPage from './NotFoundPage'
import {Link} from 'react-router'

export default class BlogEntry extends React.Component {
    render() {
        const id = this.props.params.id;
        const blogEntry = staff.filter((blog) => blog.id === id)[0];
        if (!staffMember) {
            return <NotFoundPage />;
        }
        return (
            <div>
                
            </div>
        )
    }
}