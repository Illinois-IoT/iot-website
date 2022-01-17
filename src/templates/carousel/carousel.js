/*
 * carousel.js
 * Author: Lily Li
 */

import React from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css';
import {CarouselItem} from './carouselitem.js';
import {motion} from 'framer-motion'
import hero from "../../images/hero.jpg"

export default function Slides(props) {
    var items = []
    for(var i in props.items){
        console.log(props.items[i])
        items.push(
            <Carousel.Item>
                <CarouselItem slide_title={props.items[i].title} slide_description={props.items[i].description} slide_href={props.items[i].slide_href}/>
            </Carousel.Item>
        );
    }

    return(
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="carousel-div">
                <img src={hero} alt="background image" className="background_img"/>
                <Carousel className="carousel">
                    {items}
                </Carousel>
            </div>
        </motion.div>
    );
}