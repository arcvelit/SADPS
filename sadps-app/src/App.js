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
import AppController from './components/Objects/Controllers/AppController';


function App() {

  const appController = new AppController();

  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/get-tracking-updates"   element={<GetTrackingUpdates controller={appController}/>}/>
        <Route path="/leave-a-review"         element={<LeaveAReview controller={appController}/>}/>
        <Route path="/make-delivery-request"  element={<MakeDeliveryRequest controller={appController}/>}/>
        <Route path="/transaction"            element={<Transaction controller={appController}/>}/>
        <Route path="/customer-support"       element={<ContactSupport controller={appController}/>}/>
        <Route path="/payment"                element={<MakePayment controller={appController}/>}/>

        <Route path="/" Component={Home}/>

      <Route path="*" Component={Error505}/>

      <Route render={() => <Navigate to="/" />} />

      </Routes>
    </Router>
  );
};

export default App;
