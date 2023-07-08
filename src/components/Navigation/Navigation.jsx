function Navigation(props) {
    const { aboutText, worksText, contactText } = props

    return (
        <nav className="navigation-container">
            <a className="navigation-link" href="#about">
                {aboutText}
            </a>
            <a className="navigation-link" href="#works">
                {worksText}
            </a>
            <a className="navigation-link" href="#contact">
                {contactText}
            </a>
        </nav>
    )
}

export default Navigation
