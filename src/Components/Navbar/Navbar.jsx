// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Logo" />
          
        </div>
        <div className="nav-links">
          <a href="#" className="navLink" >Home</a>
          <a href="#" className="navLink">About</a>
          <a href="#" className="navLink">Services</a>
          <a href="#" className="navLink">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

