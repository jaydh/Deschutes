'use strict';

import React from 'react';
import blogs from '../../data/Blogs.js'
import Slider from 'react-slick'

export default class BlogsPage extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="flex-container">
                <Slider {...settings}>
                    {blogs.map(blogItem => {
                        return (
                            <div>
                                <img src={blogItem.photos} height="400" />
                                <h2>{blogItem.title}</h2>
                                <h3>by {blogItem.author}     {blogItem.date.toLocaleDateString()}</h3>
                                <p>{blogItem.text}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}