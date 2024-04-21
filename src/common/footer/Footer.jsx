import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Retro Revival</h1>
            <p>Retro Revival, where the past finds its place in the present. Explore our vintage marketplace, where timeless treasures await discovery. Embrace nostalgia as you browse through curated collections of retro gems. Join us on a journey through the eras, where every item tells a story at Retro Revival.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Main Mall Road opposite Hrtc Bus Stnd Manali  </li>
              <li>Email: shiv@14makhija.com</li>
              <li>Phone: 9810XXXXXX</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
