import React from 'react'
import './home.scss'

export const Home = () => {
  return (
    <div className='totDiv'>
        <div className='texts'>
            <p id='textTit'>THE BEST WAYS TO</p>
            <h1>Promote A New</h1>
            <h1>Product or Service</h1>
            <p>Start your bussiness today with great and strong landing page made to enhance the marketers workflow.</p>
            <button>Try 14 Days for free</button>
        </div>

        <div className="form-container">
            <h2>Get a Quote</h2>
            <p>Development Comprehensive Solutions</p>

            <form>
                <input type="text" placeholder="Completed Name" required></input>
                <input type="email" placeholder="Email Address" required></input>
                <input type="tel" placeholder="Phone No" required></input>

                <label>Preferred Consult Method:</label>
                <div class="radio-group">
                    <input type="radio" name="consult" value="virtual" checked></input>
                    <label for="virtual" id='labelRadio'>VIRTUAL</label>
                    <input type="radio" name="consult" value="in-office"></input>
                    <label for="in-office" id='labelRadio'>IN OFFICE</label>
                </div>

                <button type="submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}
