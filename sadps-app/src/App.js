import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MakeDeliveryRequest from "./components/Deliveries/Customer/MakeDeliveryRequest"
import GenerateQuotationProposal from './components/Deliveries/Customer/GenerateQuotationProposal';
import DefaultHome from './components/Home/DefaultHome';
import NavigationBar from './components/General/NavigationBar';
import LeaveAReview from './components/Deliveries/Customer/LeaveAReview';
import GetTrackingUpdates from './components/Deliveries/Customer/GetTrackingUpdates';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/get-tracking-updates" Component={GetTrackingUpdates}/>
        <Route path="/leave-a-review" Component={LeaveAReview}/>
        <Route path="/make-delivery-request" Component={MakeDeliveryRequest}/>
        <Route path="/generate-quotation-proposal" Component={GenerateQuotationProposal}/>
        <Route path="/" Component={DefaultHome}/>

      <Route render={() => <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
