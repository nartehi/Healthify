import React from 'react';
import './HealthMap.css'; // Create a separate CSS file for HealthMap if needed

const HealthMap = () => {
  const handleClick = () => {
    // Define the functionality when the button is clicked
    alert('Image button clicked!');
  };

  return (
    <div className="health-map">
      <div className="header">
        <h2>Health Map</h2>
        
      </div>

      <button className="profile">Profile</button>

      <div className="subheader">
        <h4>Select a Level: </h4>
      </div>

      <div className="grid-container">
        <div className="grid-row1">
          {/* Embed the image as a button */}
          <button className="grid-item1">
            <div className='btn-title'>Body</div>
          </button>

          <button className="grid-item2">
            <div className='btn-title'>Money</div>
          </button>

          <button className="grid-item3">
            <div className='btn-title'>Friends</div>
          </button>
          <button className="grid-item4">
            <div className='btn-title'>Feelings</div>
          </button>
        </div>

        <div className="grid-row2">
          <button className="grid-item5">
            <div className='btn-title'>Planet</div>
          </button>

          <button className="grid-item6">
            <div className='btn-title'>Soul</div>
          </button>

          <button className="grid-item7">
            <div className='btn-title'>Work</div>
          </button>

          <button className="grid-item8">
            <div className='btn-title'>Brain</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthMap;
