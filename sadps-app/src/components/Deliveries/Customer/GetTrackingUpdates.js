import React, { useState } from 'react';
import './Style/Tracking.css'

function GetTrackingUpdates(){
const [trackingNumber, setTrackingNumber] = useState('');
const [status, setStatus] = useState('');
const [location, setLocation] = useState('');
const [shipmentDate, setShipmentDate] = useState('');
const [facilityArrivalDate, setFacilityArrivalDate] = useState('');
const [deliveryStartDate, setDeliveryStartDate] = useState('');

const mockData = [
  { trackingNumber: 'SADPS-123', status: 'Delivered', location: 'New York, NY', shipmentDate: '2023-03-15', facilityArrivalDate: '2023-03-17', deliveryStartDate: '2023-03-18' },
  { trackingNumber: 'SADPS-456', status: 'In Transit', location: 'Los Angeles, CA', shipmentDate: '2023-03-10', facilityArrivalDate: '2023-03-13', deliveryStartDate: '2023-03-14' },
  { trackingNumber: 'SADPS-789', status: 'Delivered', location: 'Chicago, IL', shipmentDate: '2023-03-12', facilityArrivalDate: '2023-03-14', deliveryStartDate: '2023-03-15' },
];

const handleSubmit = (e) => {
    e.preventDefault();
    const trackingInfo = mockData.find(item => item.trackingNumber === trackingNumber);
    if (trackingInfo) {
      setStatus(trackingInfo.status);
      setLocation(trackingInfo.location);
      setShipmentDate(trackingInfo.shipmentDate);
      setFacilityArrivalDate(trackingInfo.facilityArrivalDate);
      setDeliveryStartDate(trackingInfo.deliveryStartDate);
    } else {
      setStatus('Invalid Tracking Number');
      setLocation('');
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
               {shipmentDate && <p>Shipment Date: {shipmentDate}</p>}
               {facilityArrivalDate && <p>Facility Arrival Date: {facilityArrivalDate}</p>}
               {deliveryStartDate && <p>Delivery Start Date: {deliveryStartDate}</p>}
             </div>
           </div>
        </div>
      )}
      <footer className='footer'>
      <p>© 2023 SADPS. All rights reserved.</p>
      </footer>
    </div>
);
};

export default GetTrackingUpdates;