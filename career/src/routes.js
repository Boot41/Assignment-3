// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './views/Loginpage';
import LandingPage from './views/LandingPage';
import Signuppage from './views/Signuppage';
import CareerPath from './views/CareerPath';
import Schedule from './views/schedule';
import Task from './views/Task';
import NavBar from './components/NavBar'; // Adjust the import path if needed

function AppRoutes() {
  return (
    <Router>
      <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/careerpath" element={<CareerPath/>}/>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/task" element={<Task/>} />
        <Route path="/schedule" element ={<Schedule/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
