import enData from '../../data/en.json'
import frData from '../../data/fr.json'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import Language from '../../components/Language/Language'
import About from '../../components/About/About'
import MySkills from '../../components/MySkills/MySkills'
import Gallery from '../../components/Gallery/Gallery'
import Contact from '../../components/Contact/Contact'

import franceFlag from '../../assets/images/france.svg'
import ukFlag from '../../assets/images/united-kingdom.svg'

const Home = () => {
    const [language, setLanguage] = useState('fr')
    const data = language === 'fr' ? frData : enData

    // Correspondance entre abréviation de langue et drapeau
    const flagMap = {
        FR: franceFlag,
        EN: ukFlag,
    }

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'))
    }

    const currentFlag = flagMap[data.language.abbreviation]

    return (
        <main>
            <div id="navigation-container">
                <Link to="/">
                    <Logo initials="EF" firstName="Eva" lastName="Famechon" />
                </Link>
                <div className="navigation-container-right">
                    <Navigation
                        aboutText={data.navigation.about}
                        worksText={data.navigation.works}
                        contactText={data.navigation.contact}
                    />
                    <Language
                        flag={currentFlag}
                        abbreviation={data.language.abbreviation}
                        onClick={toggleLanguage}
                    />
                </div>
            </div>
            <Header title={data.header.title} list={data.header.list} />
            <About data={data.about} id="about" />
            <MySkills skills={data.skills} />
            <Gallery
                projects={data.projects}
                header={data.projectsHeader}
                id="works"
            />
            <Contact data={data.contact} id="contact" />
            <Footer
                githubLink={data.contact.githubLink}
                linkedinLink={data.contact.linkedinLink}
            />
        </main>
    )
}

export default Home
