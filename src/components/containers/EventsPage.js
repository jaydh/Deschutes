'use strict';

import React from 'react';
import Slider from 'react-slick';

export default class EvengsPage extends React.Component {

    render() {
        const settings = {
            className: "events-carousel",
            arrows: true
        };

        const events = [
            {
                id: '1',
                name: 'Color Run',
                src: '/img/events/colorrun.jpg',
                date: 'May 14',
                description: 'How’s the first few weeks of school going for everyone? Getting tired of the heavy reading and assignments yet? Looking for something fun and exciting? Why don’t you join The Color Run with the GRS family? We hope to create a memorable and everlasting memories with you. You are not good at running…? Who cares?! It is only a 5k and an un-timed so we could just take our time taking pictures and getting splashed by the color powders. So what are you waiting for? Come and join the GRS family on May 14th to attend this wonderful event. Also if you sign-up with GRS group you get an automatic cheaper price($39.99) than going as individual. Make sure to tag a friend who needs a time off school to de-stressed and have fun.',
                link: 'https://www.facebook.com/events/109019232951360/'
            },
            {
                id: '2',
                name: 'Spring BBQ',
                src: '/img/events/springbbq.jpg',
                date: 'May 20',
                description: 'Hi guys! Do you want to eat BBQ with new friends and enjoy games from all around the world? Why don’t you join GRS SPRING BBQ? It will be held on Saturday, May 20th starting at 3:00pm, however the location is still undecided and so we will keep everyone posted about any updates on place or other changes. Please make sure to free up your schedule and invite your friends!! It would be a lot of fun having yummy foods and making friends through games!',
                link: 'https://www.facebook.com/events/449395145404790/'
            }
        ]

        const eventPreview = events.map(event => {
            return (
                <div>
                    <a href={eventItem.link} >
                        <img className="eventImage" src={eventItem.src} />
                    </a>
                    <h2>{eventItem.name}</h2>
                    <h3>{eventItem.date}</h3>
                    <p>{eventItem.description}</p>
                </div>
            )
        })

        return (
            <div className="flex-container">
                <h1>EVENTS</h1>

                <Slider {...settings}>
                    {eventPreview}
                </Slider>
            </div>
        );
    }
}