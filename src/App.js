import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ErrorPage from './pages/ErrorPage'
import './sassStyles/main.sass'

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/MyPortfolio/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
