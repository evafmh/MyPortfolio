import React from 'react'

import './../../sassStyles/components/_language.sass'

const Language = ({ flag, abbreviation, onClick }) => {
    return (
        <div className="language-container" onClick={onClick}>
            <img className="language-flag" src={flag} alt="Language Flag" />
            <span className="language-abbreviation">{abbreviation}</span>
        </div>
    )
}

export default Language
