import React from 'react';
import logo from './Style/SADPS-LOGO.png';
import './Style/Home.css';

function DefaultHome() {
    return (
        <div className='home-container'>
            <img src={logo} alt="SADPS LOGO" />
            <div className="company-description">
                <p>Discover SADPS – your trusted postal solution for fast and secure delivery of mail and packages. We specialize in both local and 
                  international shipments, offering real-time tracking and personalized service. Choose SADPS for seamless, reliable, and efficient postal services.</p>
            </div>
        </div>  
    );
}

export default DefaultHome;
