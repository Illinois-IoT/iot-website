/*
 * table.js
 * Author: Lily Li
 */

import React from 'react';
import CountUp from 'react-countup';
import './table.css'
import {motion} from "framer-motion"

function Table(props){
    var table_sections = []
    for(var i in props.sections){
        table_sections.push(            
            <div id="table-section" className={i < 3 && i > 0 ? "table-border-section" : ""}>
                <img src={props.sections[i].img} id="table-cell-background-img"/>
                <div style={{zIndex:"999", opacity:"1"}}>
                    <header className="header-italics">
                    <CountUp  startOnMount={true} start={0} end={props.sections[i].header} delay={2} duration={5} />
                    </header>
                    <h6 className="paragraph" style={{color:"white"}}>{props.sections[i].description}</h6>
                </div>
            </div>
        );
    }

    return(
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
            <div id="table-div">
                {table_sections}
            </div>
        </motion.div>
    );
}
function TableCell(props){
    return(
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
            <div id="table-cell-div">
                <h5 style={{textAlign:"center"}}>{props.header}</h5>
                <img src={props.img} id="table-cell-img"/>
            </div>
        </motion.div>
    );
}

function TableCellWithBackgroundImg(props){
    const paragraphs = []
    for(var i in props.description){
        paragraphs.push(
            <p className="paragraph" style={{color:"white"}}>{props.description[i]}</p>
        );
    }
    return(
        <motion.div
        x={"-100%"}
        animate={{ x:0 }}
        transition={{ duration: 0.5 }}
        >
            <div id="table-cell" >
                <img src={props.img} id="table-cell-background-img" style={{opacity:"0.1"}}/>
                <div id="table-cell-section">
                    <h2 style={{textAlign:"center"}} style={{color:"white", textAlign:"center"}}>{props.header}</h2>
                    {paragraphs}
                </div>
            </div>
        </motion.div>
    );
}

function TableCellWithImages(props){
    const images = []
    for(var i in props.images){
        images.push(
            <motion.div
            animate={{ scale: [0.9,1] }}
            transition={{ duration: 0.7 }}
            >
            <img src={props.images[i]} id="table-cell-img"/>
            </motion.div>
        );
    }
    return(
        <div id="table-cell-img-section">
            <h4>{props.header}</h4>
            <div id="img-section" >
                {images}
            </div>
        </div>
    );
}

export {Table, TableCell, TableCellWithBackgroundImg, TableCellWithImages};