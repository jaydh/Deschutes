'use strict';

import React from 'react';
import Slider from 'react-slick';

export default class Header extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 60
    };
    return (
      <div className='Header'>
        <Slider {...settings}>
          <div><img src='/img/headers/1.jpg' /></div>
          <div><img src='/img/headers/2.jpg' /></div>
          <div><img src='/img/headers/3.jpg' /></div>
          <div><img src='/img/headers/4.jpg' /></div>
        </Slider>
      </div>
    );
  }
}
