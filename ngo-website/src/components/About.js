import React from 'react';
import ngoImage from '../images/ngo5.jfif';

import '../styles/About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
      <img src={ngoImage} alt="About Us" />
      </div>
      <div className="overlay"></div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
      Here at Nisum, we believe in the transformative power of collective action. Our journey began with a simple yet profound idea –
       that by coming together, we can make a difference. Guided by this ethos, we've been working tirelessly to uplift underserved 
       communities, one initiative at a time.
      </p>
      <p>
      Our mission extends beyond providing aid; it's about enabling individuals and communities to realize their full potential. 
       We envision a world where everyone has access to education, healthcare, and opportunities that allow them to thrive. Together, 
       we're building bridges of hope, sowing the seeds of change, and nurturing a brighter future for generations to come.
      </p>
      <p>
      Join us on this incredible journey of compassion, resilience, and growth. Together, we can create a world that's not just better 
       for some but for all. Together, we can change lives, one act of kindness at a time.
      </p>
      <button className="read-more-button2">Read More</button>
      </div>
      
    </div>
  );
}

export default About;
