import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="text-2xl font-bold">CareEx</div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/schedule" className="hover:text-gray-300">Schedule</Link>
        <Link to="/task" className="hover:text-gray-300">Task</Link>
        <Link to="/analysis" className="hover:text-gray-300">Analysis</Link>
      </div>
    </nav>
  );
}

export default NavBar;
