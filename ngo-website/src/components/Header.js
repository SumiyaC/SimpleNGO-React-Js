import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

// Import your CSS file for styling

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logoo.PNG'} alt="Nisum Logo" />
      </div>

      <div className="ngo-name">
        <img src={process.env.PUBLIC_URL + '/nisumLogo1.PNG'} alt="NGO name" />
      </div>
      <div className="header-links">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/events" className="header-link">Events</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </div>
      <button className="donate-button">DONATE</button>
      <input type="text" placeholder="Search" className="search-bar" />

    </div>
  );
}

export default Header;

