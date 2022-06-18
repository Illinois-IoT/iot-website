/*
 * collapsible.js
 * Author: Lily Li
 */

import React, {useState} from 'react';
import './collapsible.css'
import '../../theme.css';

export default function Collapsible(props) {
    const [showDetails, setShowDetails] = useState(false);
    return(
    <div className='collapsible-div'
         style={{backgroundColor: props.header_light ? "var(--cloud)" : "var(--cloud-darkest)"}}>
        <div    className='flex-row curser-pointer collapsible-header' 
                style={{backgroundColor: props.header_light ? "var(--cloud)" : "var(--cloud-darkest)"}}
                onClick={() => setShowDetails(!showDetails)}>
            <h5>{props.header}</h5>
            {showDetails ?  <h5>&#9650;</h5> : <h5>&#9660;</h5>}
        </div>
        {
            showDetails && 
            <div className='collapsible-details'>
                {props.detail}
            </div>
        }
    </div>)
}
