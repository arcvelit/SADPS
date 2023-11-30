import React from 'react';
import logo from './Style/SADPS-LOGO.png'
import './Style/Home.css'
function DefaultHome()
{
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div>
              <div className="div-4">
                <div className="column">
                  <div className="div-5">
                    Make your shipping
                    <br />
                    Easy, Fast and Safe
                  </div>
                </div>
                <div className="column-2">
                  <img
                    loading="lazy"
                    src={logo} alt = "SADPS LOGO-TM"
                    className="img"
                  />
                </div>
              </div>
            </div>
            <div className="div-6">
            Discover SADPS – your trusted postal solution for fast and secure delivery of mail and packages. We specialize in both local and international shipments, offering real-time tracking and personalized service. Choose SADPS for seamless, reliable, and efficient postal services.
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="div-8">
            <div className="column-3">
              <div className="div-9">
                <div className="div-10">overall orders</div>
                <div className="div-11">+1.3k</div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-12">
                <div className="div-13">Cities</div>
                <div className="div-14">37</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default DefaultHome;
