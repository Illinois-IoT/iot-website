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
                <img src={props.hero_img} alt="hero image" fixed="top" style={{height:"100vh", width:"100vw", left:"0", top:"0",objectFit: "cover", opacity:"0.3"}}/>
            </div>
            <div id="main-hero-quote-div">
                <h3 className="medium-header" style={{opacity:'1', color:"var(--cloud)", zIndex:'100'}}>University of Illinois Center for</h3>
                <h1 className="bold-header" style={{opacity:'1', color:"var(--cloud)", zIndex:'100'}}>Internet of Things</h1>
            </div>
        </motion.div>
    );  
}

function SubPageHero(props) {
    return(
            <div id="subpagehero" style={{position:"relative", height: props.no_margin ? "50vh" : "60vh", width:"100vw"}}>
            <div id="heading_section" style={{top: props.no_margin ? "0" : "10vh" }}>
                <img src={props.hero_img} alt="hero image" id="hero_img"/>
                <div style={{position:"absolute", left:"10vw", width: "80vw", textJustify:"left", zIndex:"5000"}}>
                    <h6 className="cloud-color text-align-left">{props.title}</h6>
                    <h1 className="cloud-color text-align-left">{props.subtitle}</h1>
                </div>
            </div>
        </div>
    );
}

function PageHero(props) {
    return (
        <div style={{ position: "relative", height: "60vh", width: "100vw", backgroundColor: "var(--cloud)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src={props.texture_img} alt="texture background image" id="subpage_texture_img" fixed="top" />
            <div id="subpage_heading_section" style={{ backgroundImage: `url(${props.hero_img})`, textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <header style={{ zIndex: '500', opacity: "1", color: "var(--illini-blue)" }}>{props.title}</header>
                    <p style={{ zIndex: '500', opacity: "1", color: "var(--illini-blue)", margin: 0 }}>
                        {props.subtitleLink ? (
                            <a href={props.subtitleLink} style={{ color: "var(--illini-blue)", textDecoration: "underline" }}>{props.subtitle}</a>
                        ) : (
                            <span style={{ color: "var(--illini-blue)" }}>{props.subtitle}</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export {MainHero, PageHero, SubPageHero};