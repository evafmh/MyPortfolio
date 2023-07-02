import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from '../Link/Link'
import Textbox from '../Textbox/Textbox'
import './Contact.css'

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
        legalDisclaimer,
    } = data

    return (
        <section className="contact-container" id={id}>
            <div className="contact-main">
                <div className="contact-info">
                    <h1 className="contact-title">{title}</h1>
                    <h2 className="contact-subtitle">{linksSubtitle}</h2>
                    <div className="contact-links">
                        <a href={githubLink}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="social-icon"
                            />
                        </a>
                        <a href={linkedinLink}>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="social-icon"
                            />
                        </a>
                    </div>
                    <h2 className="contact-subtitle">{downloadSubtitle}</h2>
                    <Link
                        href={resumeLink}
                        download={resumeText}
                        className="contact-resume-link"
                    >
                        {resumeText}
                    </Link>
                </div>
                <div className="contact-form">
                    <h2 className="contact-form-title">{formTitle}</h2>
                    <div className="text-fields-container">
                        {formTextboxes.map((label, index) => (
                            <Textbox key={index} label={label} type="text" />
                        ))}
                    </div>
                    <button type="submit" className="contact-submit-button">
                        {formSubmit}
                    </button>
                </div>
            </div>
            <p className="contact-legal">{legalDisclaimer}</p>
        </section>
    )
}

export default Contact
