/*
 * circletable.js
 * Author: Lily Li
 */

import React from 'react';
import './circletable.css'
import { motion } from "framer-motion"

function Circle(props){
    return(
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
            <a href={props.href}>
                <div id="circle" style={props.style}>
                    <h5 style={{marginTop:"10px", textAlign:"center", lineHeight:"0.9em", color:"var(--cloud)"}}>{props.heading}</h5>
                </div>
            </a>
        </motion.div>
    );
}

function CircleTable(props){
    var circles = [];
    for (var item in props.items) {
        if(item % 2 == 0){
            circles.push(
                <Circle style={{backgroundColor:"var(--illini-blue)"}} href={props.items[item].href} heading={props.items[item].heading} text={props.items[item].text}/>
            );
        }
        else {
            circles.push(
                <Circle style={{backgroundColor:"var(--illini-orange)"}} href={props.items[item].href} heading={props.items[item].heading} text={props.items[item].text}/>
            );
        }
    }
    return( 
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
            <div className="circle-div">
                {circles}
            </div>
        </motion.div>
    );
}

function CircleImageBackground(props){
    return(
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
            <div id="basic-circle" style={props.style}>
                <img src={props.img} id="circle-background-img"/>
                <h6 style={{textAlign:"center"}} className="condensed">{props.heading}</h6>
                {props.text && <p className="paragraph" style={{textAlign:"center"}}>{props.text}</p>} 
            </div>
        </motion.div>
    );
}

function CircleWithText(props){
    return(
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
            <div id="basic-circle-copyable" style={props.style}>
                <h6 className="medium-header" style={{textAlign:"center", color:"var(--darkblue)"}}>{props.heading}</h6>
                {props.text && <p className="paragraph" style={{textAlign:"center", color:"var(--darkblue)"}}>{props.text}</p>} 
            </div>
        </motion.div>
    );
}

function CircleWithTextTable(props){
    var circles = [];
    for (var item in props.items) {
        if(item == 0){
            circles.push(<CircleWithText style={{backgroundColor:"var(--illini-blue)"}} heading={props.items[item].heading} text={props.items[item].text}/>)
        }
        else if(item == 1){
            circles.push(<CircleWithText style={{backgroundColor:"var(--cloud-dark)", color:"var(--illini-blue"}} heading={props.items[item].heading} text={props.items[item].text}/>)
        }
        else{
            circles.push(<CircleWithText style={{backgroundColor:"var(--illini-orange)"}} heading={props.items[item].heading} text={props.items[item].text}/>)
        }
    }
    return( 
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
            <div className="circle-div">
                {circles}
            </div>
        </motion.div>
    );
}

function CircleImageBackgroundTable(props){
    var circles = [];
    for (var item in props.items) {
        circles.push(<CircleImageBackground style={{color:"white"}} img={props.items[item].img} heading={props.items[item].heading} text={props.items[item].text}/>)
    }
    return( 
        <div className="circle-div">
            {circles}
        </div>
    );
}

export {CircleTable, CircleImageBackgroundTable, Circle, CircleWithText, CircleWithTextTable};