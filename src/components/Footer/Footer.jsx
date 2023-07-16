import React from 'react'
import Logo from '../Logo/Logo'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialLinks from '../SocialLinks/SocialLinks'

import './../../sassStyles/components/_footer.sass'

const Footer = ({ githubLink, linkedinLink }) => {
    const socialLinksData = [
        { link: githubLink, icon: faGithub },
        { link: linkedinLink, icon: faLinkedin },
    ]

    return (
        <footer className="footer">
            <div className="footer-left">
                <Logo initials="EF" firstName="Eva" lastName="Famechon" />
            </div>
            <div className="footer-right">
                <SocialLinks Links={socialLinksData} />
            </div>
        </footer>
    )
}

export default Footer
