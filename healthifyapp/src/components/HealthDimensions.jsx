import React from 'react';
import './healthdimensions.css';
const HealthDimensions = () => {
  return (
    <div className="health-dimensions">
      <h1>Eight Dimensions of Health</h1>
      <div className="grid-container">
        <div className="grid-item">Physical Health</div>
        <div className="grid-item">Emotional Health</div>
        <div className="grid-item">Social Health</div>
        <div className="grid-item">Intellectual Health</div>
        <div className="grid-item">Environmental Health</div>
        <div className="grid-item">Occupational Health</div>
        <div className="grid-item">Financial Health</div>
        <div className="grid-item">Spiritual Health</div>
      </div>
    </div>
  );
};

export default HealthDimensions;
