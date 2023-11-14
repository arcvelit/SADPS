import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import DeliveryRequest from "./components/Deliveries/Customer/DeliveryRequest"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DeliveryRequest}/>


      <Route render={() => <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
