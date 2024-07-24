// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Signuppage from './views/Signuppage';
import NavBar from './components/NavBar'; // Adjust the import path if needed

function AppRoutes() {
  return (
    <Router>
      <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signuppage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
