import React from 'react';
import logo from './Style/SADPS-LOGO.png'
import './Style/Home.css'

function DefaultHome()
{
    return (
      <div className='home-container'>
          <img src={logo} alt="SADPS LOGO-TM" />
      </div>  
    );
}

export default DefaultHome;
