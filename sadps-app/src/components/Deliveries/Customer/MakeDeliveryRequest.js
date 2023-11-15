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
    <div>
      <h1>New Delivery Request</h1>
      <form onSubmit={handleSubmit}>
        <h2>Pickup Details</h2>
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
        <h2>Drop off Details</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
 );
};


export default MakeDeliveryRequest;
