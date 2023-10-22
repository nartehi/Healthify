import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
// import HealthDimensions from './components/HealthDimensions';
// import HealthMap from './components/HealthMap';
import flipbook from './components/flipbook';
import HorizontalFlipbook from './components/flipbook';
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
