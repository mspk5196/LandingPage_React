import React from 'react'
import './signInPage.scss'
import { useNavigate } from "react-router-dom";


const SignInPage = ({ setIsLoggedIn }) => {
  
  const navigate = useNavigate()
  const handleSignIn = () => {
    navigate("/Home");
    setIsLoggedIn(true);
  };

  function formSignIn(event) {
    event.preventDefault();
    
    let email = document.getElementById("Email").value
    let password = document.getElementById("Password").value

    // let signInBtn = document.getElementById("signInBtn")
    console.log(email, password);
    
    if (email === "example@gmail.com" && password === "example") {
      
      handleSignIn();

      email=null;
      password=null;

      document.getElementById("Email").value="";
      document.getElementById("Password").value="";

    } else {
      alert("Incorrect email or password");
    }
  }
  function cancelSignIn() {
    navigate('/LandingPage_React/Home')
  }
  return (
    <div>
      <div id='signInForm' onSubmit={formSignIn}>
        <form action="SIGN IN">

          <input type="email" name="email" placeholder='Enter your email' id="Email" required />
          <br />
          <input type="password" name="password" placeholder='Enter your password' id="Password" required />
          <br />

          <button type='submit'>SIGN IN</button>
          <button onClick={cancelSignIn}>CANCEL</button>
          
          <p>or</p>

          <input type="button" value="Sign in with Google" />
          <br />
          <input type="button" value="Sign in with Facebook" />

        </form>
      </div>
    </div>
  )
}

export default SignInPage