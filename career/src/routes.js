import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signuppage from './views/Signuppage';
import LoginPage from './views/Loginpage'; // Ensure the filename matches
import LandingPage from './views/LandingPage';
import CareerPath from './views/CareerPath';
import Schedule from './views/Schedule'; // Ensure capitalization matches component
import Task from './views/Task';
import NavBar from './components/NavBar'; // Ensure the path is correct
import { useAuth } from './context/AuthContext';

function AppRoutes() {
  const { isLoggedIn } = useAuth(); // Get authentication status

  return (
    <Router>
      <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/career" element={isLoggedIn ? <CareerPath /> : <LoginPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/schedule" element={<Schedule />} /> {/* Ensure this is correctly named */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
