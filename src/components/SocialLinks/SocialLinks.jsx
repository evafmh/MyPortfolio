import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './../../sassStyles/components/_socialLinks.sass'

const SocialLinks = ({ Links }) => {
    return (
        <div className="social-links">
            {Links.map((linkData, index) => (
                <a href={linkData.link} key={index} className="social-link">
                    <FontAwesomeIcon
                        icon={linkData.icon}
                        className="social-icon"
                    />
                </a>
            ))}
        </div>
    )
}

export default SocialLinks
