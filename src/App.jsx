import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

// Client ID 87666842618-3uahf7e2oqom1fqbsj2ld3b9jlppjhia.apps.googleusercontent.com
// Client secret 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