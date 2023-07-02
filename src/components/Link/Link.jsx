import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Link.css'

const Link = ({ href, download, className, children }) => {
    return (
        <a href={href} download={download} className={`link ${className}`}>
            {children} <FontAwesomeIcon icon={faArrowDown} />
        </a>
    )
}

export default Link
