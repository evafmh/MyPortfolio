import React from 'react'
import './Header.css'
import headerOrangeShape from '../../assets/images/header-orange-shape.svg'

const Header = ({ title, list }) => {
    // Extraire le symbole "&" du titre
    let firstPart = ''
    let secondPart = ''

    if (title.includes('&')) {
        const titleParts = title.split('&')
        firstPart = titleParts[0].trim()
        secondPart = titleParts[1].trim()
    } else {
        firstPart = title
    }
    return (
        <header className="header-container">
            <div className="header-content">
                <ul className="header-subtext">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h1 className="title">
                    {firstPart}
                    {title.includes('&') && (
                        <span className="ampersand"> & </span>
                    )}
                    {secondPart}
                </h1>
            </div>
            <img
                id="header-image"
                src={headerOrangeShape}
                alt="Header Orange Shape"
            />
        </header>
    )
}

export default Header
