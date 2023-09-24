import React from 'react';
import '../styles/Header.css';

// Import your CSS file for styling

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logoo.PNG'} alt="Nisum Logo" />
      </div>
      <div className="ngo-name">Nisum</div>
      <div className="header-links">
        <div className="header-link">Home</div>
        <div className="header-link">About</div>
        <div className="header-link">Events</div>
        <div className="header-link">Contact</div>
      </div>
      <button className="donate-button">DONATE</button>
      <input type="text" placeholder="Search" className="search-bar" />

    </div>
  );
}

export default Header;

