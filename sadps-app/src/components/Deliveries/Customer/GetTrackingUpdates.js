import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './Style/Tracking.css'

function GetTrackingUpdates()
{

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
  
  const mockData = [
    { trackingNumber: 'SADPS-123', status: 'Delivered', location: 'New York, NY', lat: 40.74843, lng: -73.98565, pickupDate: '2022-02-15', transitStatus: '2022-02-16', deliveryDate: '2022-02-20' },
    { trackingNumber: 'SADPS-456', status: 'In Transit', location: 'Montreal, QC', lat: 45.49717, lng: -73.57882, pickupDate: '2019-02-15', transitStatus: 'Expected arrival on 2019-02-16', deliveryDate: 'Expected delivery on 2019-02-20' },
    { trackingNumber: 'SADPS-789', status: 'Delivered', location: 'Chicago, IL', lat: 41.87887, lng: -87.63591, pickupDate: '2023-11-15', transitStatus: '2023-11-16', deliveryDate: '2023-12-20' },
    { trackingNumber: 'SADPS-450', status: 'Delivered', location: 'Laval, QC', lat: 45.57146, lng: -73.75439 , pickupDate: '2023-02-15', transitStatus: '2023-02-16', deliveryDate: '2023-02-20'},
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const trackingInfo = mockData.find(item => item.trackingNumber === trackingNumber);
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
