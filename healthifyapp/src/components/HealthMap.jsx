import React from 'react';
import './HealthMap.css'; // Create a separate CSS file for HealthMap if needed

const HealthMap = () => {
  return (
    <div className="health-map">
      <div className="header">
        <h2>Health Map</h2>
        <button className="profile">Profile</button>
      </div>

      <div className="subheader">
        <h3>Select a Level: </h3>
      </div>

      <div className="grid-container">
        <div className="grid-row1">
          <button className="grid-item">Body</button>
          <button className="grid-item">Money</button>
          <button className="grid-item">Friends</button>
          <button className="grid-item">Feelings</button>
        </div>
        <div className="grid-row2">
          <button className="grid-item">Planet</button>
          <button className="grid-item">Soul</button>
          <button className="grid-item">Work</button>
          <button className="grid-item">Brain</button>
        </div>
      </div>
    </div>
  );
};

export default HealthMap;
