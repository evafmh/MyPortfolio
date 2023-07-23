import React, { useState, useEffect, useRef } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../../sassStyles/components/_scrollToTopButton.sass'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isBouncing, setIsBouncing] = useState(false)
    const [isInactivityPeriod, setIsInactivityPeriod] = useState(false)
    const inactivityTimer = useRef(null)

    const scrollToTop = () => {
        setIsInactivityPeriod(false) // Reset the inactivity period flag
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const resetInactivityTimer = () => {
        setIsInactivityPeriod(true) // Set the inactivity period flag
        setIsBouncing(false) // Reset the bounce animation
        clearTimeout(inactivityTimer.current)
        inactivityTimer.current = setTimeout(() => {
            setIsInactivityPeriod(false) // Reset the inactivity period flag after 3 seconds of inactivity
            setIsBouncing(true) // Start the bounce animation again
        }, 5000) // Set the inactivity time (5 seconds)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsVisible(scrollY > 200) // Show the button when the user scrolls down 200 pixels
            resetInactivityTimer()
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('click', resetInactivityTimer)
        window.addEventListener('mousemove', resetInactivityTimer)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', resetInactivityTimer)
            window.removeEventListener('mousemove', resetInactivityTimer)
            clearTimeout(inactivityTimer.current)
        }
    }, [])

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'show' : ''} ${
                isBouncing && !isInactivityPeriod ? 'bounce' : ''
            }`}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}

export default ScrollToTopButton
