/*
 * hero.js
 * Author: Lily Li
 */

import React from 'react';
import './hero.css'
import '../../theme.css';
import {motion} from 'framer-motion'


function MainHero(props) {
    return (
        <motion.div
        y={"-100%"}
        animate={{ y:0 }}
        transition={{ duration: 0.5 }}
        >
            <div id="main-hero-div">
                <img src={props.hero_img} alt="hero image" fixed="top" style={{height:"100vh", width:"100vw", left:"0", top:"0",objectFit: "cover", opacity:"0.4"}}/>
            </div>
            <div id="main-hero-quote-div">
                <h3 className="medium-header" style={{opacity:'1', color:"white", zIndex:'100'}}>University of Illinois</h3>
                <h1 className="bold-header" style={{opacity:'1', color:"white", zIndex:'100'}}>Internet of Things</h1>
            </div>
        </motion.div>
    );  
}

function SubPageHero(props) {
    return(
        <motion.div
        y={"-100%"}
        animate={{ y:0 }}
        transition={{ duration: 0.5 }}
        >
            <div style={{position:"relative", height:"50vh", width:"100vw"}}>
                {/* <img src={props.texture_img} alt="texture background image" id="texture_img" fixed="top"/> */}
                <div id="heading_section">
                    <img src={props.hero_img} alt="hero image" id="hero_img"/>
                    <div style={{position:"absolute", left:"10vw", width: "80vw", textJustify:"left", zIndex:"5000"}}>
                        <h6 className="cloud-color text-align-left">{props.title}</h6>
                        <h1 className="cloud-color text-align-left">{props.subtitle}</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function PageHero(props){
    return(
        <motion.div
        y={"-100%"}
        animate={{ y:0 }}
        transition={{ duration: 0.5 }}
        >
            <div style={{position:"relative", height:"60vh", width:"100vw"}}>
                <img src={props.texture_img} alt="texture background image" id="subpage_texture_img" fixed="top"/>
                <div id="subpage_heading_section" style={{backgroundImage:`url(${props.hero_img})`}}>
                    <header style={{zIndex:'500', opacity:"1"}}>{props.title}</header>
                </div>
            </div>
        </motion.div>
    );
}

export {MainHero, PageHero, SubPageHero};