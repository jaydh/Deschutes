'use strict';

import React from 'react';
import Slider from 'react-slick';



export default class EvengsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {events: 
            [
                {
                    id: '1',
                    name: 'life',
                    src: '/img/events/travel.jpg',
                    name: 'test1',
                    description: 'test description',
                    link: 'www.google.com'
                },
                {
                    id: '2',
                    name: 'test',
                    src: '/img/events/travel.jpg',
                    name: 'test2',
                    description: 'test description',
                    link: 'www.google.com'
                }
            ]
        }
    }

   render () {
    var settings = {
        dots: true,
        slidesToScroll: 4
    };

    return (
      <Slider {...settings}>

        {this.state.events.map(eventItem => {
             return (
                 <div>
                    <a href={eventItem.link} >
                     <img className="eventImage" src={eventItem.src}/>
                    </a>
                    {eventItem.name} 
                    {eventItem.description}
                </div>
             )
        })}
      </Slider>
    );
  }
}