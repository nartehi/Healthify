import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
import HealthDimensions from './components/HealthDimensions'

function App() {
  return (
    <div className='App'>
      <h1> Healthy Kids Zone!</h1>
      <Signup />
      <HealthDimensions />
    </div>
  );
}

export default App;