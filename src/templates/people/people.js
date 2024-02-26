/*
 * people.js
 * Author: Lily Li
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../../theme.css';
import "./people.css";

import linkedin from "../../images/linkedin_logo.webp"
import instagram from "../../images/instagram_logo.webp"
import youtube from "../../images/youtube_logo.webp"

function PeopleTable(props) {
    var people = []
    for(var p in props.people){
        people.push(<Person 
            name={props.people[p].name} 
            bio={props.people[p].bio} 
            involvement={props.people[p].involvement} 
            img={props.people[p].img} 
            large={props.large}
            instagram={props.people[p].instagram}
            linkedin={props.people[p].linkedin}
            youtube={props.people[p].youtube}
            link={props.people[p].link}/>);
    }
    return(
        <div id={props.large ? "people-large-div" : "people-div"}>
            {people}
        </div>
    );
}

function Person(props) {
    return(
        <div id={props.large ? "person-large-div" : "person-div"}>
            <img src={props.img} id="person-img"/>
            <h4 style={{color:"var(--illini-blue)"}}><a href={props.link}>{props.name}</a></h4>
            <p style={{color:"var(--industrial-blue)"}}>{props.bio}</p>
            <p>{props.involvement}</p>
            <div className='flex-row center-align'>
                {props.linkedin ? <a href={props.linkedin}><img src={linkedin} id="social-logo"/></a> : <div></div>}
                {props.instagram ? <a href={props.instagram}><img src={instagram} id="social-logo"/></a> : <div></div>}
                {props.youtube ? <a href={props.youtube}><img src={youtube} id="social-logo"/></a> : <div></div>}
            </div>
        </div>
    );
}

export {PeopleTable};
