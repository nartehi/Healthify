import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
import HomePage from './components/HomePage';
import HealthMap from './components/HealthMap';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/healthmap" element={<HealthMap />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
