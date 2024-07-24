import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if user is remembered
const user = localStorage.getItem('user');
if (user) {
  // Navigate to dashboard or handle user state
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
