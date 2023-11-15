import React, { useState } from 'react';
import './Style/Tracking.css'

function GetTrackingUpdates(){
const [trackingNumber, setTrackingNumber] = useState('');
const [status, setStatus] = useState('');
const [location, setLocation] = useState('');

const mockData = [
   { trackingNumber: 'SADPS-123', status: 'Delivered', location: 'New York, NY' },
   { trackingNumber: 'SADPS-456', status: 'In Transit', location: 'Los Angeles, CA' },
   { trackingNumber: 'SADPS-789', status: 'Delivered', location: 'Chicago, IL' },
];

const handleSubmit = (e) => {
   e.preventDefault();
   const trackingInfo = mockData.find(item => item.trackingNumber === trackingNumber);
   if (trackingInfo) {
     setStatus(trackingInfo.status);
     setLocation(trackingInfo.location);
   } else {
     setStatus('Invalid Tracking Number');
     setLocation('');
   }
};

return (
   <div className='container'>
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
            </div>
          </div>
       </div>
     )}
   </div>
);
};


export default GetTrackingUpdates;
