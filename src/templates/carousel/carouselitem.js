/*
 * carouselitem.js
 * Author: Lily Li
 */

import React from 'react';
import './carouselitem.css';
import '../../theme.css'
import { ButtonContainer } from '../buttons/buttons';

function CarouselItem(props){
    return(
        <div className="item-div">
            <div className="information">
                <h3>{props.slide_title}</h3>
                <p>{props.slide_description}</p>
                <ButtonContainer 
            items={[
              {name: "More Information", href: props.slide_href}
            ]}/>
            </div>
        </div>
    );
}

export {CarouselItem};