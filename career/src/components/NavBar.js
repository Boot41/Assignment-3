// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">CareEx</div>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/signup" className="text-white mx-2">Sign Up</Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
