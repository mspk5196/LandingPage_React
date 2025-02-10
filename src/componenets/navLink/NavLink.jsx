import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './NavLinks.scss'

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
            <h2 id='title'><img src="images/logo.png" alt="logo" />websole</h2>
            <ul>
                <li onClick={() => navigate('/Home')}>Home</li>
                <li onClick={() => navigate('/About')}>About</li>
                <li onClick={() => navigate('/Contact')}>Contact</li>
                <li id='signInBtn' onClick={()=> {navigate(isLoggedIn ? '/' : 'signInPage'); isLoggedIn ? signOut : null}}>{isLoggedIn ? 'SIGN OUT' : 'SIGN IN'}</li>
            </ul>
        </div>

    )
    // <Link id='signInBtn' onClick={isLoggedIn ? signOut : null} to={isLoggedIn ? '/' : '/signInPage'}></Link>
}
