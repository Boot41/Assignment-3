import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './views/Loginpage';
import LandingPage from './views/LandingPage';
import Signuppage from './views/Signuppage';
import CareerPath from './views/CareerPath';
import Schedule from './views/Schedule'; // Capitalize Schedule to match component name
import Task from './views/Task';
import NavBar from './components/NavBar'; // Adjust the import path if needed
import { useAuth } from './context/AuthContext'; // Import the AuthContext

function AppRoutes() {
  const { isLoggedIn } = useAuth(); // Get isLoggedIn from context

  return (
    <Router>
      <NavBar /> {/* Include NavBar if you want it to be present on all pages */}
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/career" element={isLoggedIn ? <CareerPath /> : <LoginPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/schedule" element={<Schedule />} /> {/* Capitalize Schedule */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
