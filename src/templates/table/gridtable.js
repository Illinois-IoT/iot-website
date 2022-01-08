/*
 * gridtable.js
 * Author: Lily Li
 */

import React from 'react';
import './gridtable.css'
import {motion} from 'framer-motion'
import { ButtonContainer } from '../buttons/buttons';

export default function GridTable(props){
    var rows = []
    for(var i in props.items){
        rows.push(
            <motion.div
            animate={{ scale: [0.9,1] }}
            transition={{ duration: 0.5 }}
            >
            <Row header={props.items[i].header} text={props.items[i].text} buttons={props.items[i].buttons}/>
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
            <div id="grid-row-header-background">
                <div id="grid-row-header-div">
                    <h2 id="header">{props.header}</h2>
                </div>
            </div>
            <div id="grid-text-div">
                <p>{props.text}</p>
                <ButtonContainer 
                    items={props.buttons}/>
            </div>
        </div>
    )
}