/*
 * tablerow.js
 * Author: Lily Li
 */

import React from 'react';
import './tablerow.css'
import { ButtonContainer } from '../buttons/buttons';

export default function TableRow(props){
    return(
    <div className={props.blue_background ? "lightblue-div" : ""}>
        <div className="tablerow-div">
            <img src={props.img_src} className="circle-div tablerow-img"/>
            <div className='tablerow-detail'>
                {props.header}
                {props.detail}
            </div>
        </div>
    </div>)
}