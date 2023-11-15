import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeliveryTracker from './TrackingUpdates';

function App() {
  return (
    <div>
      <h1>SADPS</h1>
      
      <DeliveryTracker />
  
    </div>
  );
};

export default App;
