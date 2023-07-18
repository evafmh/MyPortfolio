import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './../../sassStyles/components/_navigation.sass'

function Navigation(props) {
    const { aboutText, worksText, contactText } = props
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('body-no-scroll')
        } else {
            document.body.classList.remove('body-no-scroll')
        }

        // Cleanup function to remove the class when the component unmounts or is updated
        return () => {
            document.body.classList.remove('body-no-scroll')
        }
    }, [isMenuOpen])

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Menu hamburger (affiché sur les petits écrans) */}
            <div
                className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={handleMenuToggle}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`navigation-wrapper ${isMenuOpen ? 'open' : ''}`}>
                {/* Liens de navigation (affichés sur les grands écrans ou en mode déroulant) */}
                <nav
                    className={`navigation-links-container ${
                        isMenuOpen ? 'open' : ''
                    }`}
                    onClick={handleCloseMenu}
                >
                    {isMenuOpen && (
                        <div className="close" onClick={handleCloseMenu}>
                            <FontAwesomeIcon
                                className="close-icon"
                                icon={faCircleXmark}
                            />
                        </div>
                    )}
                    <a
                        className="navigation-link"
                        href="#about"
                        onClick={handleCloseMenu}
                    >
                        {aboutText}
                    </a>
                    <a
                        className="navigation-link"
                        href="#works"
                        onClick={handleCloseMenu}
                    >
                        {worksText}
                    </a>
                    <a
                        className="navigation-link"
                        href="#contact"
                        onClick={handleCloseMenu}
                    >
                        {contactText}
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Navigation
