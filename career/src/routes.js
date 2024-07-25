import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './views/Loginpage';
import LandingPage from './views/LandingPage';
import Signuppage from './views/Signuppage';
import CareerPath from './views/CareerPath';
import schedule from './views/Schedule';
import Task from './views/Task';
import NavBar from './components/NavBar'; // Adjust the import path if needed

function AppRoutes() {
  return (
    <Router>
      <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/careerpath" element={<CareerPath />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/schedule" element={<schedule />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
