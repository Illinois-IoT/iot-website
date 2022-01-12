/*
 * paragraph.js
 * Author: Lily Li
 */

import React from 'react';
import '../../theme.css';
import './paragraph.css'

function Paragraph(props) {
    var paragraphs = []
    for(var p in props.paragraphs){
        paragraphs.push(<p className="paragraph" style={{marginTop:"10px"}}>{props.paragraphs[p]}</p>);
    }
    return(
        <div id="paragraph-div">
            {props.heading && <h4 style={{paddingLeft:"20px",paddingRight:"20px"}}>{props.heading}</h4>} 
            {props.subheading && <div className="subheading">{props.subheading}</div>}
            {paragraphs}
            {props.list}
        </div>
    );
}

function CustomList(props) {
    return(
        <div id="list-div">
            {props.listHeader}
            {props.listItems}
        </div>
    );
}

function List(props) {
    var list = []
    for(var p in props.listItems){
        list.push(<p className='list-item'>&#x2212; {props.listItems[p]}</p>);
    }
    return(
        <div id="list-div">
            {props.listHeader}
            {list}
        </div>
    );
}

export {Paragraph, List, CustomList};
