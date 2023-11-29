import React from 'react';
import {  Link } from "react-router-dom";

import './NavigationBar.css'


function NavigationBar()
{
    const     STYLE_LINK_NAVBAR = { textDecoration: 'none', color: '#ffff' };
    const     STYLE_LINK_DROPDOWN = { textDecoration: 'none', color: '#5c5c5c' };

    return (
        <div className='navbar'>
            <li>
                <Link to="/" style={STYLE_LINK_NAVBAR}>Home</Link>
            </li>
            <div className='dropdown'>
                <button className='dropbtn'>Transaction</button>
                <div className='dropdown-content'>
                    <li>
                        <Link to="/transaction" state={{ isRefund: false }} style={STYLE_LINK_DROPDOWN}>Delivery Review</Link>
                    </li>
                    <li>
                        <Link to="/transaction" state={{ isRefund: true }} style={STYLE_LINK_DROPDOWN}>Refund Review</Link>
                    </li>
                </div>
            </div>
            <div className='dropdown'>
                <button className='dropbtn'>Services</button>
                    <div className='dropdown-content'>
                        <li>
                            <Link to="/make-delivery-request" style={STYLE_LINK_DROPDOWN}>New delivery request</Link>
                        </li>
                        <li>
                            <Link to="/get-tracking-updates" style={STYLE_LINK_DROPDOWN}>Track a delivery</Link>
                        </li>
                        <li>
                            <Link to="/leave-a-review" style={STYLE_LINK_DROPDOWN}>Leave your review</Link>
                        </li>
                    </div>
            </div>
            <div className='dropdown'>
                <button className='dropbtn'>Help</button>
                <div className='dropdown-content'>
                    <li>
                        <Link to="/customer-support" style={STYLE_LINK_DROPDOWN}>Customer Support</Link>
                    </li>
                </div>
            </div>
        </div>  
    );
}

export default NavigationBar;
