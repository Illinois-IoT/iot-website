/*
 * buttons.js
 * Author: Lily Li
 */

import React from 'react';
import { Button} from 'react-bootstrap';
import './buttons.css'
import {motion} from 'framer-motion'

function BasicButton(props){
    return(
    <Button variant="pill" target={props.new_tab ? "_blank" : ""} href={props.href} id="basic-button"><h7 id="basic-button-text">{props.name}</h7></Button>
    );
}

function ButtonContainer(props){
    var buttons = [];
    for (var item in props.items) {
        buttons.push(
            <BasicButton href={props.items[item].href} name={props.items[item].name} new_tab={props.items[item].new_tab}/>
        );
    }
    return( 
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
        <div className="button-section" >
            <div className="button-div">
                {buttons}
            </div>
        </div>
        </motion.div>
    );
}

export {BasicButton, ButtonContainer};
