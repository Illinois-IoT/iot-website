/*
 * carouselitem.js
 * Author: Lily Li
 */

import React from 'react';
import './carouselitem.css';
import '../../theme.css'


function CarouselItem(props){
    return(
        <div className="item-div">
            <img src={props.background_img} alt="background image" className="background_img"/>
            <div className="information">
                <h3>{props.slide_title}</h3>
                <p>{props.slide_description}</p>
            </div>
        </div>
    );
}

export {CarouselItem};