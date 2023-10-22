import React from "react";
import "./homepage.css";
import { Link } from 'react-router-dom';

 
function HomePage() {
  return (
    <div className="home">
        <div className="background-image">
        <h1>Healthify</h1>
      
        <div className="body">
        <p>
          <span role="img" aria-label="Star">🌟</span> Explore, Play, and Learn <span role="img" aria-label="Star">🌟</span>
        </p>
          <p>
            Discover the exciting journey to a healthier and happier you.
          </p>
          <p> Our interactive platform is designed just for YOU! </p>
          <p>Join us in exploring the exciting world of wellness, from nutritious eating to active living, mindfulness to self-care.</p>
          <p>
            <span role="img" aria-label="Heart">🧡</span> WHY CHOOSE US?
          </p>
          <ul>
            <li><span role="img" aria-label="Rainbow">🌈</span> Fun Learning: Engage in interactive games, challenges, and activities that make wellness an adventure.</li>
            <li><span role="img" aria-label="People">👫</span> Community: Connect with like-minded young individuals on the path to wellness.</li>
            <li><span role="img" aria-label="Book">📚</span> Knowledge: Gain valuable insights and tips to boost your overall well-being.</li>
            <li><span role="img" aria-label="Tada">🎉</span> Rewards: Earn badges and prizes as you progress on your wellness journey.</li>
          </ul>
          <p>
            Are you ready to embark on an empowering and exciting wellness voyage?
          </p>
        </div>

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


