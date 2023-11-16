import React from 'react';
import { useState } from 'react';
import './Style/MakeDelivery.css'


function MakeDeliveryRequest()
 {
 const [pickup, setPickup] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
 });

 const [packageDetails, setPackageDetails] = useState({
  description: '',
  weight: '',
  height: '',
  length: '',
  width: '',
});

 const [dropoff, setDropoff] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
 });

 const handleChange = (e, setValues) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
 };

 const handleSubmit = (e) => {
    e.preventDefault();
 };

 return (
    <div className='del-req-container'>
      <h1>New Delivery Request</h1>
      <form onSubmit={handleSubmit}>
        <div className='delivery-request-boxes'>
        <div className='pickup-form'>
        <h2>Pickup details</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={pickup.name}
            onChange={e => handleChange(e, setPickup)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={pickup.address}
            onChange={e => handleChange(e, setPickup)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={pickup.city}
            onChange={e => handleChange(e, setPickup)}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={pickup.postalCode}
            onChange={e => handleChange(e, setPickup)}
          />
        </label>
        <label>
          Phone Number:
 <input
            type="text"
            name="phoneNumber"
            value={pickup.phoneNumber}
            onChange={e => handleChange(e, setPickup)}
          />
        </label>
        </div>
        <div className='dropoff-form'>
        <h2>Drop off details</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={dropoff.name}
            onChange={e => handleChange(e, setDropoff)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={dropoff.address}
            onChange={e => handleChange(e, setDropoff)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={dropoff.city}
            onChange={e => handleChange(e, setDropoff)}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={dropoff.postalCode}
            onChange={e => handleChange(e, setDropoff)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={dropoff.phoneNumber}
            onChange={e => handleChange(e, setDropoff)}
          />
        </label>
        </div>
        <div className='package-details-form'>
        <h2>Package details</h2>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={packageDetails.description}
            onChange={e => handleChange(e, setPackageDetails)}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={packageDetails.weight}
            onChange={e => handleChange(e, setPackageDetails)}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={packageDetails.height}
            onChange={e => handleChange(e, setPackageDetails)}
          />
        </label>
        <label>
          Length:
          <input
            type="text"
            name="length"
            value={packageDetails.length}
            onChange={e => handleChange(e, packageDetails)}
          />
        </label>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={packageDetails.width}
            onChange={e => handleChange(e, packageDetails)}
          />
        </label>
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
 );
};


export default MakeDeliveryRequest;
