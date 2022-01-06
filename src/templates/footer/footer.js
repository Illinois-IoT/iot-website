/*
 * footer.js
 * Author: Lily Li
 */

import React from 'react';
import './footer.css'
import '../../theme.css';
import wordmark from "../../images/uiuc-wordmark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faTwitterSquare,
    faYoutubeSquare,
    faLinkedinIn,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
    <div className='footer-div'>
        <div className='footer-content-div'>
            <img src={wordmark} id="uiuc-wordmark"/>
            <div className='footer-socials-div'>
                <a href="https://www.facebook.com/CSatIllinois/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} fixedWidth size="2x" aria-hidden={true} id="social-icon"/></a>
                <a href="https://twitter.com/IllinoisCS/" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="2x" fixedWidth aria-hidden={true} id="social-icon"/></a>
                <a href="https://www.youtube.com/user/IllinoisCS/" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} fixedWidth aria-hidden={true} size="2x" id="social-icon"/></a>
                <a href="https://www.linkedin.com/school/illinoiscs/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth aria-hidden={true} size="2x" id="social-icon"/></a>
                <a href="https://www.instagram.com/illinoiscs/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} fixedWidth aria-hidden={true} size="2x" id="social-icon"/></a>
            </div>
            <div className='footer-text-div'>
                <p><b>Thomas M. Siebel Center for Computer Science</b></p>
                <p>201 North Goodwin Avenue MC 258</p>
                <p>Urbana, IL 61801-2302</p>
                <p>phone: 217-333-3426</p>
                <p>fax: 217-333-3501</p>
                <p>email: admin@cs.illinois.edu</p>
            </div>
        </div>
    </div>);
}