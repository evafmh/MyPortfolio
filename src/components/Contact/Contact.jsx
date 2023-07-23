import React, { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button, CircularProgress } from '@mui/material'
import Link from '../Link/Link'
import Textbox from '../Textbox/Textbox'
import SocialLinks from '../SocialLinks/SocialLinks'

import { publicUrl } from '../../utils/publicUrl'
import './../../sassStyles/components/_contact.sass'

const Contact = ({ data, id }) => {
    const {
        title,
        linksSubtitle,
        githubLink,
        linkedinLink,
        downloadSubtitle,
        resumeText,
        resumeLink,
        formTitle,
        formTextboxes,
        formSubmit,
        formSubmitWaiting,
        formSubmitInputsError,
        formSubmitSuccess,
        formSubmitError,
        legalDisclaimer,
    } = data

    const socialLinksData = [
        { link: githubLink, icon: faGithub },
        { link: linkedinLink, icon: faLinkedin },
    ]

    const formSubmitSuccessMessage = formSubmitSuccess.split('\n\n')

    const initialFormData = formTextboxes.reduce(
        (formData, textbox) => ({
            ...formData,
            [textbox.id]: '',
        }),
        {}
    )

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const nameRegex = /^[a-zA-Z\s]+$/
    const MAX_NAME_LENGTH = 80
    const MAX_MESSAGE_LENGTH = 4000

    const [formData, setFormData] = useState(initialFormData)
    const [isEmailSent, setIsEmailSent] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputErrors, setInputErrors] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name.toLowerCase()]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true) // Show the loading icon
        setHasError(false) // Clear any previous error
        setIsEmailSent(false) // Clear any previous success message
        setInputErrors(false) // Clear any previous inputs error

        // Input validation
        const { name, email, message } = formData

        if (!name.match(nameRegex) || name.length > MAX_NAME_LENGTH) {
            // Invalid name format or exceeds max length
            setInputErrors(true)
            setIsLoading(false)
            return
        }
        if (!email.match(emailRegex)) {
            // Invalid email format
            setInputErrors(true)
            setIsLoading(false)
            return
        }
        if (message.trim() === '' || message.length > MAX_MESSAGE_LENGTH) {
            // Empty message or exceeds max length
            setInputErrors(true)
            setIsLoading(false)
            return
        }

        // Send form data to the backend using fetch
        fetch('http://localhost:4000/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error while sending the email')
                }
                setIsLoading(false) // Hide the loading icon
                setIsEmailSent(true) // Set the state to display the success message
                setFormData(initialFormData) // Reset the form inputs
                // Add a timeout to remove the success message after 5 seconds
                setTimeout(() => {
                    setIsEmailSent(false)
                }, 5000)
            })
            .catch((error) => {
                console.error('Error while sending the email:', error.message)
                setIsLoading(false) // Hide the loading icon
                setHasError(true) // Set the state to display the error message
            })
    }

    return (
        <section className="contact-container" id={id}>
            <div className="contact-main">
                <div className="contact-info">
                    <h2 className="contact-title">{title}</h2>
                    <div
                        className="contact-info-container"
                        id="contact-social-links-container"
                    >
                        <h3 className="contact-subtitle">{linksSubtitle}</h3>
                        <SocialLinks Links={socialLinksData} />
                    </div>
                    <div
                        className="contact-info-container"
                        id="contact-cv-link-container"
                    >
                        <h3 className="contact-subtitle">{downloadSubtitle}</h3>
                        <Link
                            href={`${publicUrl}/${resumeLink}`}
                            download={resumeLink}
                            className="contact-resume-link"
                        >
                            {resumeText}
                        </Link>
                    </div>
                </div>
                <div className="contact-form">
                    <h3 className="contact-form-title">{formTitle}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="text-fields-container">
                            {formTextboxes.map((textbox, index) => (
                                <Textbox
                                    key={index}
                                    label={textbox.label}
                                    type={textbox.type}
                                    value={formData[textbox.id]}
                                    onChange={handleInputChange}
                                    name={textbox.id}
                                />
                            ))}
                        </div>
                        <div className="contact-sentEmail-message">
                            {isLoading && (
                                <div className="contact-sentEmail-message-waiting">
                                    <CircularProgress className="circular-progress" />
                                    <p>{formSubmitWaiting}</p>
                                </div>
                            )}
                            {isEmailSent && (
                                <div className="contact-sentEmail-message-success">
                                    {formSubmitSuccessMessage.map(
                                        (paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        )
                                    )}
                                </div>
                            )}
                            {hasError && <p>{formSubmitError}</p>}
                            {inputErrors && <p>{formSubmitInputsError}</p>}
                        </div>
                        <Button type="submit" className="contact-submit-button">
                            {formSubmit}
                        </Button>
                    </form>
                </div>
            </div>
            <p className="contact-legal">{legalDisclaimer}</p>
        </section>
    )
}

export default Contact
