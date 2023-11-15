import React, { useState } from 'react';
import './App.css';
const TrackingPage = () => {
 const [trackingNumber, setTrackingNumber] = useState('');
 const [status, setStatus] = useState('');
 const [location, setLocation] = useState('');

 const mockData = [
    { trackingNumber: 'SADPS-123', status: 'Delivered', location: 'New York, NY' },
    { trackingNumber: 'SADPS-456', status: 'In Transit', location: 'Montreal, QC' },
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Tracking Number:
          <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} />
        </label>
        <button type="submit">Track</button>
      </form>
      {status && (
        <div>
          <h3>Status: {status}</h3>
          {location && <p>Location: {location}</p>}
        </div>
      )}
    </div>
 );
};

export default TrackingPage;