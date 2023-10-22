import React from 'react';
import Signup from './components/SignUp'; // the path to the Signup component
import './App.css'
// import HealthDimensions from './components/HealthDimensions';
// import HealthMap from './components/HealthMap';
import flipbook from './components/flipbook';
import HorizontalFlipbook from './components/flipbook';
function App() {
  return (
    <div className='App'>
      <h1> Healthy Kids Zone!</h1>
      {/* <Signup /> */}
      {/* <HealthDimensions />  */}
      {/* <button className='letsgoButn'>Let's Go!</button> */}
      {/* <HealthMap /> */}
      <HorizontalFlipbook />
    </div>
  );
}

export default App;
