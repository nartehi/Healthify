import React from "react";
import "./homepage.css";
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="home">
        <div className="background-image">
        <h1>Healthy Kids Zone!</h1>
        <Link to="/SignUp">
        <button className="letsgoButn">
          Let's Go!
        </button>
      </Link>
    </div>
    </div>
    
    
  );
}

export default HomePage;
