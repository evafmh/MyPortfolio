import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from '@mui/material'
import Link from '../Link/Link'
import Textbox from '../Textbox/Textbox'
import SocialLinks from '../SocialLinks/SocialLinks'

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
        legalDisclaimer,
    } = data

    const socialLinksData = [
        { link: githubLink, icon: faGithub },
        { link: linkedinLink, icon: faLinkedin },
    ]

    return (
        <section className="contact-container" id={id}>
            <div className="contact-main">
                <div className="contact-info">
                    <h2 className="contact-title">{title}</h2>
                    <h3 className="contact-subtitle">{linksSubtitle}</h3>
                    <SocialLinks Links={socialLinksData} />
                    <h3 className="contact-subtitle">{downloadSubtitle}</h3>
                    <Link
                        href={resumeLink}
                        download={resumeLink}
                        className="contact-resume-link"
                    >
                        {resumeText}
                    </Link>
                </div>
                <div className="contact-form">
                    <h3 className="contact-form-title">{formTitle}</h3>
                    <div className="text-fields-container">
                        {formTextboxes.map((textbox, index) => (
                            <Textbox
                                key={index}
                                label={textbox.label}
                                type={textbox.type}
                            />
                        ))}
                    </div>
                    <Button type="submit" className="contact-submit-button">
                        {formSubmit}
                    </Button>
                </div>
            </div>
            <p className="contact-legal">{legalDisclaimer}</p>
        </section>
    )
}

export default Contact
