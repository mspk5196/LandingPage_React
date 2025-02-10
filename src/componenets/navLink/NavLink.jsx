import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './NavLinks.scss'
import logo from '../../assets/logo.png'

export default function NavLink() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function signOut() {
        alert("Are you sure you want to sign out?");
        document.getElementById('signInBtn').textContent = 'SIGN IN';
        setIsLoggedIn(false);
    }


    return (

        <div className='nav-link-desktop'>
            <h2 id='title'><img src={logo} alt="logo" />websole</h2>
            <ul>
                <li onClick={() => navigate('/LandingPage_React/Home')}>Home</li>
                <li onClick={() => navigate('/LandingPage_React/About')}>About</li>
                <li onClick={() => navigate('/LandingPage_React/Contact')}>Contact</li>
                <li id='signInBtn' onClick={()=> {navigate(isLoggedIn ? '/LandingPage_React/' : '/LandingPage_React/signInPage'); isLoggedIn ? signOut : null}}>{isLoggedIn ? 'SIGN OUT' : 'SIGN IN'}</li>

            </ul>
        </div>

    )
    // <Link id='signInBtn' onClick={isLoggedIn ? signOut : null} to={isLoggedIn ? '/' : '/signInPage'}></Link>
}
