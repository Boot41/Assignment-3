import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between py-2 px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Safira March, sans-serif' }}>CareExp</h3>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/career" className="hover:text-gray-300">Home</Link>
        <Link to="/schedule" className="hover:text-gray-300">Schedule</Link>
        <Link to="/task" className="hover:text-gray-300">Task</Link>
        <Link to="/analysis" className="hover:text-gray-300">Analysis</Link>
      </div>
    </nav>
  );
}

export default NavBar;
