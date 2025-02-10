import React from 'react';
import './home.scss';
import websiteImage from '../../assets/website-image.jpg'

export const Home = () => {
  return (
    <div className='totDiv'>
        <div className='texts'>
            <p id='textTit'>THE BEST WAYS TO</p>
            <h1>Promote A New</h1>
            <h1>Product or Service</h1>
            <p>Start your business today with a great and strong landing page made to enhance the marketer's workflow.</p>
            <p>With our online website maker, you can create stunning websites in minutes!</p>
            <ul>
              <li>User-friendly drag-and-drop interface</li>
              <li>A wide range of customizable templates</li>
              <li>SEO-friendly designs to boost visibility</li>
              <li>24/7 customer support for assistance</li>
            </ul>

            <button>Try 14 Days for free</button>
        </div>

        <div className="image-container">
            <img src={websiteImage} alt="Website Maker Interface" />
        </div>
        
        <div className="form-container">
            <h2>Get a Quote</h2>
            <p>Development Comprehensive Solutions</p>

            <form>
                <input type="text" placeholder="Completed Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone No" required />

                <label>Preferred Consult Method:</label>
                <div className="radio-group">
                    <input type="radio" name="consult" value="virtual" checked onChange={() => {}} />
                    <label htmlFor="virtual" id='labelRadio'>VIRTUAL</label>
                    <input type="radio" name="consult" value="in-office" onChange={() => {}} />
                    <label htmlFor="in-office" id='labelRadio'>IN OFFICE</label>
                </div>

                <button type="submit">Submit Now</button>
            </form>
        </div>
    </div>
  );
}
