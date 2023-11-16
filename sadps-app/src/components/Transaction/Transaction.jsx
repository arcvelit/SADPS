import React from 'react';
import './Transaction.css';
import parcel from './stockparcel.webp';
import { useTransactionDetails } from './hooks';

const Transaction = () => {
    const {transactionCost, email} = useTransactionDetails();
    /*
        Page that shows the subtotal of the transaction (can be fake numbers) and every essential 
        info like shipping address, is it a delivery or refund, what method of delivery was selected;
        each of them with « change » buttons (that don’t need to be implemented)
    */
    return (
        <div className='transaction-container'>
            <div className='checkout-container'>
                <div className='contact-info-container'>
                    <p>SADPS Delivery Transaction Checkout</p>
                    <p className='left-align-headers'>Contact Information</p>
                    <div className='input-container'>
                        <input placeholder='Email' defaultValue={email}/>
                        <div className='email-checkbox'>
                            <label>Email me with news and offers: </label>
                            <input type='checkbox'/>
                        </div>
                    </div>
                    <p className='left-align-headers'>Shipping Information</p>
                    <div className='checkout-form'>
                        <div className='input-container row-inputs'>
                            <input className='first-name-input'placeholder='First Name'/>
                            <input className='last-name-input' placeholder='Last Name'/>
                        </div>
                        <div className='input-container'>
                            <input className='company-input' placeholder='Company Name'/>
                        </div>
                        <div className='input-container'>
                            <input className='address-input' placeholder='Address'/>
                        </div>
                        <div className='input-container'>
                            <input className='address-optional-input' placeholder='Apartment, suite, etc. (Optional)'/>
                        </div>
                        <div className='input-container'>
                            <input className='city-input' placeholder='City'/>
                        </div>
                        <div className='input-container row-inputs'>
                            <input className='country-input' placeholder='Country'/>
                            <input className='state-input' placeholder='State'/>
                            <input className='zip-code-input' placeholder='ZIP Code'/>
                        </div>
                        <div className='input-container'>
                            <input className='phone-input' placeholder='Phone'/>
                        </div>
                    </div>
                    <div className='input-container button-container'>
                        <button className='confirm-button'>Confirm Delivery</button>
                    </div>
                </div>
                <div className='transaction-summary-container'>
                    <p></p>
                    <div className='delivery-info-container'>
                        <img className="parcel-img" src={parcel} alt='parcel'/>
                        <p className='del-request'>Delivery Request for Radioactive Materials</p>
                        <p>${transactionCost}</p>
                    </div>
                    <hr/>
                    <div className='sub-total-container'>
                        <p>Delivery Type: Green, 0$</p>
                        <p>Sub-total: ${transactionCost}</p>
                    </div>
                    <hr/>
                    <div className='final-total-container'>
                        <p>Total Delivery Cost: ${transactionCost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;