'use strict';

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';


export default class Header extends React.Component {
  render() {
    const settings = {
      className: "header-carousel",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };

    const images = ['/img/headers/1.jpg', '/img/headers/2.jpg', '/img/headers/3.jpg', '/img/headers/4.jpg', '/img/headers/5.jpg', '/img/headers/7.jpg', '/img/headers/8.jpg', '/img/headers/9.jpg', '/img/headers/10.jpg', '/img/headers/11.jpg', '/img/headers/12.jpg', '/img/headers/13.jpg', '/img/headers/14.jpg', '/img/headers/15.jpg', '/img/headers/16.jpg']
    const taggedImages = images.map(image => {
      return (<div><img className="header-image" src={image}/></div>);
    })
    return (
      <div className='Header'>

        <div id="logo">
          <Link className to={`/`} activeClassName="active">
            <img src='/img/logo-grs.png' />
          </Link>
        </div>
        <Slider {...settings}>
          {taggedImages}
        </Slider>

      </div>
    );
  }
}
