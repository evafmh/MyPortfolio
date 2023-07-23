import React, { useState, useEffect } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../../sassStyles/components/_scrollToTopButton.sass'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY
        setIsVisible(scrollY > 200) // Show the button when the user scrolls down 200 pixels
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}

export default ScrollToTopButton
