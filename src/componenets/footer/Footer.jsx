import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <p>Websole || Since 2024 || Follow us on &nbsp;&nbsp;
                <a className="sm" href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ "color": "rgb(0, 183, 255)" }} /></a>&nbsp;&nbsp;&nbsp;
                <a className="sm" href="#" target="_blank"><FontAwesomeIcon icon={faEnvelope} style={{ "color": "rgb(216, 35, 35)" }} /></a>
            </p>
        </div>
    )
}
