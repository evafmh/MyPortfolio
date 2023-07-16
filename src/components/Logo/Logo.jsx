import React from 'react'

import './../../sassStyles/components/_logo.sass'

function Logo(props) {
    const { initials, firstName, lastName } = props

    return (
        <div className="logo-container">
            <div className="initials">{initials}</div>
            <div className="vertical-line"></div>
            <div className="name">
                <div>{firstName}</div>
                <div>{lastName}</div>
            </div>
        </div>
    )
}

export default Logo
