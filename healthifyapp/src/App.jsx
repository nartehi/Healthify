import React from 'react';
import Signup from './components/SignUp';
import HomePage from './components/HomePage';
import './App.css';
import './index.css' // Import CSS Styling
import { Routes, Route } from 'react-router-dom';
import HealthMap from './components/HealthMap';

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




