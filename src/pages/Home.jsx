import enData from '../data/en.json'
import frData from '../data/fr.json'
import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../styles/utils/colors.css'
import '../styles/utils/styles.css'

const language = 'fr'

const Home = () => {
    const data = language === 'fr' ? frData : enData

    return (
        <main>
            <Navigation
                aboutText={data.navigation.about}
                worksText={data.navigation.works}
                contactText={data.navigation.contact}
            />
            <Header title={data.header.title} list={data.header.list} />

            <h1>{data.welcomeMessage}</h1>
            <h2>blabla</h2>
            <Footer />
        </main>
    )
}

export default Home
