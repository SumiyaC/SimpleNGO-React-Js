import React from 'react';
import '../styles/Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home">
      <div className="text-overlay">
        <h1 className="home-text">"Empowering communities, fostering change<br />
          & <br/>creating a brighter future together"
        </h1>
        <button className="read-more-button">Read More</button>
      </div>

      <div className="background-overlay"></div>
    </div>
  );
}

export default Home;

