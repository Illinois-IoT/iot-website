/*
 * gridtable.js
 * Author: Lily Li
 */

import React from 'react';
import './grid_table.css'
import {motion} from 'framer-motion'

export default function GridTable(props){
    var rows = []
    for(var i in props.items){
        rows.push(
            <motion.div
            animate={{ scale: [0.9,1] }}
            transition={{ duration: 0.5 }}
            >
            <Row header={props.items[i].header} text={props.items[i].text} img={props.items[i].img}/>
            </motion.div>
        );
    }
    return(
        <div className="grid-table-div">
            {rows}
        </div>
    );
}

function Row(props){
    return(
        <div id="grid-row-div">
            <div id="grid-img-div">
                <img src={props.img} id="grid-img"/>
                <div id="grid-row-header-background">
                    <h2 id="header">{props.header}</h2>
                </div>
            </div>
            <div id="grid-text-div">
                <p>{props.text}</p>
            </div>
        </div>
    )
}