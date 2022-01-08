/*
 * flipcard.js
 * Author: Lily Li
 */

import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';
import './flipcards.css'
import {motion} from 'framer-motion'

export default function FlipCards(props){
    var items = []
    for(var i in props.items){
        items.push(
          <Card primary={props.items[i].primary} secondary={props.items[i].secondary} img={props.items[i].img}/>
        );  
    }
    return (
        <div className="cards-div">
            {items}
        </div>
    )
}

function Card(props){
    let [hover,setHover]= useState(false);
    const changeHover = (bool) => {
        console.log(bool);
        setHover(bool);
    }
    return(
        <motion.div
        animate={{ scale: [0.9,1] }}
        transition={{ duration: 0.5 }}
        >
        <ReactCardFlip isFlipped={hover} flipDirection="horizontal" flipSpeedFrontToBack={0.5} flipSpeedBackToFront={0.5}>
          <div id="flip-card" 
           onMouseEnter={()=>setHover(true)}>
                <img src={props.img} id="flip-background-img"/>
                <h1 className="flip-item-text" style={{fontSize:"50px", color:"white"}}>{props.primary}</h1>
          </div>
          <div id="flip-card"
           onMouseLeave={()=>setHover(false)}
           style={{backgroundColor:"white"}}>
                <img src={props.img} id="flip-background-img"/>
                <h6 className="flip-item-text" id="secondary">{props.secondary}</h6>
          </div>
        </ReactCardFlip>
        </motion.div>
    );
}
