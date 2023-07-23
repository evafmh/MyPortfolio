import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './../../sassStyles/components/_link.sass'

const Link = ({ href, download, className, children }) => {
    return (
        <a href={href} download={download} className={`link ${className}`}>
            {children} {download && <FontAwesomeIcon icon={faArrowDown} />}
        </a>
    )
}

export default Link
