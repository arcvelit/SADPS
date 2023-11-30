import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MakeDeliveryRequest from "./components/Deliveries/Customer/MakeDeliveryRequest"
import Home from './components/Home/Home';
import NavigationBar from './components/General/NavigationBar';
import LeaveAReview from './components/Deliveries/Customer/LeaveAReview';
import GetTrackingUpdates from './components/Deliveries/Customer/GetTrackingUpdates';
import Transaction from './components/Transaction/Transaction';
import MakePayment from './components/Transaction/MakePayment';
import Error505 from './components/Home/505';
import ContactSupport from './components/Support/ContactSupport'


function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/get-tracking-updates" Component={GetTrackingUpdates}/>
        <Route path="/leave-a-review" Component={LeaveAReview}/>
        <Route path="/make-delivery-request" Component={MakeDeliveryRequest}/>
        <Route path="/transaction" Component={Transaction}/>
        <Route path="/" Component={Home}/>
        <Route path="/customer-support" Component={ContactSupport}/>
        <Route path="/payment" Component={MakePayment}/>

      <Route path="*" Component={Error505}/>

      <Route render={() => <Navigate to="/" />} />

      </Routes>
    </Router>
  );
};

export default App;
