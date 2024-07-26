import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signuppage from './views/Signuppage';
import LoginPage from './views/Loginpage'; // Ensure the filename matches
import LandingPage from './views/LandingPage';
import CareerPath from './views/CareerPath';
import CareerFitAnalysis from './views/CareerFitAnalysis';
import Schedule from './views/Schedule'; // Ensure capitalization matches component
import Task from './views/Task';
import NavBar from './components/NavBar' // Ensure the path is correct
import ProtectedRoute from './components/ProtectedRoute';

function AppRoutes() {
  // No need to get isLoggedIn here if it's not used
  return (
    <>
    <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/career" element={<ProtectedRoute><CareerPath /></ProtectedRoute>} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/schedule" element={<Schedule />} /> 
        <Route path="analysis"  element={<CareerFitAnalysis />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
