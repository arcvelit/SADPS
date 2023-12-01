import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './Style/Tracking.css'

function GetTrackingUpdates(props)
{

  const appController = props.controller;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyABR1ooIS5LNeO7dOCAgBc7JnHUF8fT82g',
  });

  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(45.49717);
  const [longitude, setLongitude] = useState(-73.57882);
  const [pickupDate, setPickupDate] = useState('');
const [transitStatus, setTransitStatus] = useState('');
const [deliveryDate, setDeliveryDate] = useState('');
  
  const data = appController.getTrackingSessions();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    appController.fetchTrackingInfo();

    const trackingInfo = data.find(item => item.trackingNumber === trackingNumber);
    if (trackingInfo) {
      setStatus(trackingInfo.status);
      setLocation(trackingInfo.location);
      setLatitude(trackingInfo.lat);
      setLongitude(trackingInfo.lng);
      setPickupDate(trackingInfo.pickupDate);
      setTransitStatus(trackingInfo.transitStatus);
      setDeliveryDate(trackingInfo.deliveryDate);
    } else {
      setStatus('Invalid Tracking Number');
      setLocation('Curent location');
    }
  };


  return (
    <div className='container'>
           <h1>Track your packages</h1>
 
     <div className='tracking-form'>
       
       <form onSubmit={handleSubmit}>
         <label>
           Tracking Number:
           <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} />
         </label>
         <button type="submit">Track</button>
         <button type="button" >Add</button>
       </form>
     </div>
      {status && (
        <div className='status-box'>
           <div className='status-collection'>
             <div className='status'>
                <h3>Status: {status}</h3>
                {location && <p>Location: {location}</p>}
                {pickupDate && <p>Pickup Date: {pickupDate}</p>}
        {transitStatus && <p>Arrived at facility on: {transitStatus}</p>}
        {deliveryDate && <p>Delivery Date: {deliveryDate}</p>}
                <div className='map'>
                  {!isLoaded ? (<h1>Loading...</h1>) : (
                    <GoogleMap mapContainerClassName='map-container' center={{lat: latitude, lng: longitude}} zoom={13}>
                      <Marker position={{lat: latitude, lng: longitude}}/>
                    </GoogleMap>
                  )}
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
 };

export default GetTrackingUpdates;
