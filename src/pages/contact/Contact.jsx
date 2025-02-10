import React from 'react'
import './contact.scss'

export const Contact = () => {
  return (
    <div>
      <form action="submit" method="POST" id="ContactForm">

        <input type="hidden" name="access_key" value="d78ca6f1-b100-4692-a05d-cacfb2844083"></input>


        <input type="text" name="name" required id="form_name" placeholder="Your Name here"></input><br></br>


        <input type="email" name="email" id="form_email" placeholder="Your EMail here" required></input><br></br>

        <input type="tel" name="phone" id="form_tel" placeholder="Your Phone No. here" required></input><br></br>

        <textarea name="message" id="form_desc" placeholder="Type your message here" required></textarea><br></br>

        <button id="submit" type="submit" onclick="submit()">Submit</button>
        <button id="cancel" type="reset" onclick="cancel()">Cancel</button>
      </form>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  )
}
// https://api.web3forms.com/submit