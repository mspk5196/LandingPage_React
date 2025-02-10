import React, { useState } from 'react'
import './App.scss'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignInPage from './pages/signIn/SignInPage'
import Footer from './componenets/footer/Footer'
import NavLink from './componenets/navLink/NavLink'
import NavLinkMobile from './componenets/navLink/NavLinkMobile'


export const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <div className="background">
            </div>

            <NavLink />
            <NavLinkMobile />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignInPage" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>


            <Footer />
        </div>
    )
}