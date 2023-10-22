import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
import HomePage from './components/HomePage';
import HealthMap from './components/HealthMap';
import HorizontalFlipbook from './components/HorizontalFlipbook';
import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/healthmap" element={<HealthMap />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/HorizontalFlipbook" element={<HorizontalFlipbook />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
export default App;
