// Footer.js
import React from 'react';
import './Style/Footer.css'; // make sure to create this CSS file in your Style directory
import facebookIcon from './Style/Facebook_icon_2013.png'; // path to your downloaded icon
import twitterIcon from './Style/Coast_twitter.png';
import instagramIcon from './Style/Instagram_logo_2022.png';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="social-media-icons">
                <a href="https://www.facebook.com" className="social-icon">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" className="social-icon">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com" className="social-icon">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
