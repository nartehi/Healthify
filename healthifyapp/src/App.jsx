import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
import HomePage from './components/HomePage';
import HealthMap from './components/HealthMap';
import HorizontalFlipbook from './components/flipbook';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <HorizontalFlipbook /> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/healthmap" element={<HealthMap />} />
        <Route path="/" element={<HomePage />} />
        <Route path ="/flipbook" element={<HorizontalFlipbook />} />
      </Routes>
    </div>
  );
}
export default App;
