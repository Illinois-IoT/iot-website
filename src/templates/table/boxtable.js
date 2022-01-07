/*
 * boxtable.js
 * Author: Lily Li
 */

import React from 'react';
import './table.css'
import './box_table.css'

export default function BoxTable(props){
    const [hide, setHide] = React.useState({ 
        hide: window.innerWidth > 1000 ? true : false
    });
    React.useEffect(() => {
        function handleResize() {
          setHide({
            hide: window.innerWidth > 1000 ? true : false
          })
    }
        window.addEventListener('resize', handleResize)
    })
    return(
        <div className="box-table-div">
            <Row1 hide={hide.hide} header={props.items[0].header} text={props.items[0].text} img={props.items[0].img} link={props.items[0].link} linkText={props.items[0].linkText}/>
            <Row2 hide={hide.hide} header={props.items[1].header} text={props.items[1].text} img={props.items[1].img}/>
            <Row1 hide={hide.hide} header={props.items[2].header} text={props.items[2].text} img={props.items[2].img} link={props.items[2].link} linkText={props.items[2].linkText}/>
        </div>
    );
}

function Row1(props){
    return(
        <div className="row-div">
            <div className="text-div">
                <h2 style={{color:"white", textAlign:"left"}} className="quote-paragraph">{props.header}</h2>
                {props.hide && <p className="subscript" style={{color:"white"}}>{props.text}</p>}
                {props.hide && <a href={props.link}><p className="subscript" style={{color:"white", textDecoration:"underline"}}>{props.linkText}</p></a>}
            </div>
            <div className="right-arrow-div-blue"/>
                <div id="img-right-div">
                    <img src={props.img} style={{height:"100%"}} id="img-right"/>
                </div>
        </div>
    )
}

function Row2(props){
    return(
        <div className="row-div">
            <div id="img-left-div">
                <img src={props.img} id="img-left"/>
            </div>
            <div className="left-arrow-div" id="left-arrow"/>
            <div className="text-div" id="darkblue-background">
                <h2 style={{color:"white", textAlign:"left"}} className="quote-paragraph">{props.header}</h2>
                {props.hide && <p className="subscript" style={{color:"white"}}>{props.text}</p>}
            </div>
        </div>
    )
}