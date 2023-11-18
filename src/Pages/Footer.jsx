import React from "react"
import { homeData } from "../dummyData"
import "./footer.css";
import { faFacebook, faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>© 2023 All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property . Duplication and copy of this is strictly prohibited. All rights reserved.</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <a href="https://www.linkedin.com/in/mohit-thakur-6b2456250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
            <a href=""> <FontAwesomeIcon className="icon"icon={faTwitter} /></a>
            <a href="">  <FontAwesomeIcon icon={faGithub} className="icon"/></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
          </div>
          <div className='box'>
            <h3>Movies App</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
