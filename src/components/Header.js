import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-purple-600 text-white p-4">
    <nav className="flex justify-between">
      <h1>TagliWe</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;