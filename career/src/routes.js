// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './views/Loginpage';
import Signuppage from './views/Signuppage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
