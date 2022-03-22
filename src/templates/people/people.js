/*
 * people.js
 * Author: Lily Li
 */

import React from 'react';
import '../../theme.css';
import "./people.css";

function PeopleTable(props) {
    var people = []
    for(var p in props.people){
        people.push(<Person name={props.people[p].name} bio={props.people[p].bio} involvement={props.people[p].involvement} img={props.people[p].img} large={props.large}/>);
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
            <h4 style={{color:"var(--illini-blue)"}}>{props.name}</h4>
            <p style={{color:"var(--industrial-blue)"}}>{props.bio}</p>
            <p>{props.involvement}</p>
        </div>
    );
}

export {PeopleTable};
