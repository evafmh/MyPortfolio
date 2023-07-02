import enData from '../../data/en.json'
import frData from '../../data/fr.json'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import Language from '../../components/Language/Language'
import About from '../../components/About/About'

import franceFlag from '../../assets/images/france.svg'
import ukFlag from '../../assets/images/united-kingdom.svg'

import './Home.css'
import '../../styles/utils/colors.css'
import '../../styles/utils/styles.css'

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
                <Logo initials="EF" firstName="Eva" lastName="Famechon" />
                <Language
                    flag={currentFlag}
                    abbreviation={data.language.abbreviation}
                    onClick={toggleLanguage}
                />
                <Navigation
                    aboutText={data.navigation.about}
                    worksText={data.navigation.works}
                    contactText={data.navigation.contact}
                />
            </div>
            <Header title={data.header.title} list={data.header.list} />
            <About data={data.about} id="about" />
            <h1>{data.welcomeMessage}</h1>
            <h2>blabla</h2>
            <Footer />
        </main>
    )
}

export default Home
