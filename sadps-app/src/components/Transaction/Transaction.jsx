import React from 'react';
import './Transaction.css';
import parcel from './stockparcel.png';
import { useTransactionDetails } from './hooks';
import { useLocation } from 'react-router-dom';

const Transaction = () => {
    const { state: { isRefund } } = useLocation();
    const {
        transactionCost, 
        email, 
        firstName, 
        lastName, 
        companyName, 
        address, 
        optionalAddress,
        city,
        country,
        state,
        zipCode,
        phone,
        disabled,
        handleUpdateClick
    } = useTransactionDetails();

    return (
        <div className='transaction-container'>
            <div className='checkout-container'>
                <div className='contact-info-container'>
                    <p>SADPS Delivery {isRefund ? "Refund" : "Shipping" } Summary</p>
                    <p className='left-align-headers'>Contact Information</p>
                    <div className='input-container'>
                        <input placeholder='Email' defaultValue={email} disabled={disabled}/>
                        { isRefund ? null :
                            <div className='email-checkbox'>
                                <label>Email me with news and offers: </label>
                                <input type='checkbox'defaultValue="true"/>
                            </div>
                        }
                    </div>
                    <p className='left-align-headers'>{isRefund ? "Refund" : "Shipping" } Information</p>
                    <div className='checkout-form'>
                        <div className='input-container row-inputs'>
                            <input className='first-name-input'placeholder='First Name'defaultValue={firstName} disabled={disabled}/>
                            <input className='last-name-input' placeholder='Last Name' defaultValue={lastName} disabled={disabled}/>
                        </div>
                        <div className='input-container'>
                            <input className='company-input' placeholder='Company Name' defaultValue={companyName} disabled={disabled}/>
                        </div>
                        <div className='input-container'>
                            <input className='address-input' placeholder='Address' defaultValue={address} disabled={disabled}/>
                        </div>
                        <div className='input-container'>
                            <input className='address-optional-input' placeholder='Apartment, suite, etc. (Optional)' defaultValue={optionalAddress} disabled={disabled}/>
                        </div>
                        <div className='input-container'>
                            <input className='city-input' placeholder='City' disabled={disabled} defaultValue={city}/>
                        </div>
                        <div className='input-container row-inputs'>
                            <input className='country-input' placeholder='Country' defaultValue={country} disabled={disabled}/>
                            <input className='state-input' placeholder='State' defaultValue={state} disabled={disabled}/>
                            <input className='zip-code-input' placeholder='ZIP Code' defaultValue={zipCode} disabled={disabled}/>
                        </div>
                        <div className='input-container'>
                            <input className='phone-input' placeholder='Phone'defaultValue={phone} disabled={disabled}/>
                        </div>
                    </div>
                    <div className='input-container button-container'>
                        <button className='update-button' onClick={handleUpdateClick}>Update Information</button>
                        <button className='confirm-button'>Confirm</button>
                    </div>
                </div>
                <div className='transaction-summary-container'>
                    <p></p>
                    <div className='delivery-info-container'>
                        <img className="parcel-img" src={parcel} alt='parcel'/>
                        <p className='del-request'>{isRefund ? "Refund" : "" } Delivery Request for Radioactive Materials</p>
                        <p>{transactionCost} {isRefund ? " CR" : "" }</p>
                    </div>
                    <hr/>
                    <div className='sub-total-container'>
                        <p>{isRefund ? "Refund" : "" } Delivery Type: Green, 0$</p>
                        <p>Sub-total: {transactionCost}{isRefund ? " CR" : "" }</p>
                    </div>
                    <hr/>
                    <div className='final-total-container'>
                        <p>{ isRefund ? "Amount to be refunded: " : "Total Delivery Cost: "} {transactionCost} {isRefund ? " CR" : "" }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;