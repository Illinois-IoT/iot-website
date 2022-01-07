/*
 * carousel.js
 * Author: Lily Li
 */

import React from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css';
import {CarouselItem} from './carouselitem.js';
import {motion} from 'framer-motion'

export default function Slides(props) {
    var items = []
    for(var i in props.items){
        console.log(props.items[i])
        items.push(
            <Carousel.Item>
                <CarouselItem background_img={props.items[i].background_img} slide_title={props.items[i].title} slide_description={props.items[i].description}/>
            </Carousel.Item>
        );
    }

    return(
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
            <Carousel className="carousel">
                {items}
            </Carousel>
        </motion.div>
    );
}