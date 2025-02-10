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
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignInPage" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>



            {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/SignInPage" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
                </Routes> */}




            <Footer />
        </div>
    )
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faClose } from '@fortawesome/free-solid-svg-icons'

// const [navOpen, setNavOpen] = useState(false);
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// function signOut() {
//     alert("Are you sure you want to sign out?");
//     document.getElementById('signInBtn').textContent = 'SIGN IN';
//     setIsLoggedIn(false); 
//   }

//   function openNav() {
//     setNavOpen(!navOpen);
//   }

{/* <nav>
                        <h2 id='title'><img src="images/logo.png" alt="logo" />websole</h2>
                        <ul>
                            <li><Link className={"link-styles"} to="/Home">Home</Link></li>
                            <li><Link className={"link-styles"} to="/About">About</Link></li>
                            <li><Link className={"link-styles"} to="/ContactUs">Contact</Link></li>
                            <li><Link id='signInBtn' onClick={isLoggedIn ? signOut : null} to={isLoggedIn ? '/' : '/signInPage'}>{isLoggedIn ? 'SIGN OUT' : 'SIGN IN'}</Link></li>
                        </ul>
                    </nav>    */}

{/* <div className='navTitle' style={{ borderBottomRightRadius: navOpen ? '0px' : '10px', borderBottomLeftRadius: navOpen ? '0px' : '10px' }}>

                        <h2 id='titleImg'><img src="images/logo.png" alt="logo" />Websole</h2>
                        <button id='NavIcon' onClick={openNav}><FontAwesomeIcon icon={navOpen ? faClose : faBars} id='navImg' /></button>

                    </div>
                    
                    <nav style={{ backgroundColor: navOpen ? 'rgba(0, 0, 0, 0.474)' : 'rgba(255, 255, 255, 0)' }}>
                        <ul id='navList' className={navOpen ? 'open' : ''}>
                            <li><Link className={"link-styles"} to="/Home" onClick={openNav}>Home</Link></li>
                            <li><Link className={"link-styles"} to="/About" onClick={openNav}>About</Link></li>
                            <li><Link className={"link-styles"} to="/ContactUs" onClick={openNav}>Contact</Link></li>
                            <li><Link className={"link-styles-btn"} id='signInBtnMobile' onClick={isLoggedIn ? signOut : openNav} to={isLoggedIn ? '/' : '/signInPage'}>{isLoggedIn ? 'SIGN OUT' : 'SIGN IN'}</Link></li>
                        </ul>
                    </nav> */}